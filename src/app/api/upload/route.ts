import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

const { ACCESS_KEY_ID, SECRET_ACCESS_KEY, REGION, BUCKET_NAME } = process.env;

const s3 = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: ACCESS_KEY_ID || '',
    secretAccessKey: SECRET_ACCESS_KEY || '',
  },
});

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Get file from formData
    const file = formData.get('file') as File | null;

    if (!file) {
      throw new Error('File not found');
    }

    // Convert file to stream
    const stream: ReadableStream = file.stream();

    // Convert stream to buffer
    const chunks = [];

    // @ts-ignore
    for await (const chunk of stream) {
      chunks.push(chunk);
    }

    const Key = `${file.name}-${Date.now().toString()}`;

    /**
     * Defines the parameters for the S3 PutObject command to upload
     * the file to S3.
     * - Bucket: The S3 bucket name
     * - Key: The unique S3 object key
     * - Body: The file content as a Buffer
     * - ContentType: The file MIME type
     * - ACL: Set the object ACL to public-read
     */
    /**
     * ACL sets the access control list permissions for the uploaded object.
     * This is set to public-read to allow anyone to view the file.
     */
    const putParams = {
      Bucket: BUCKET_NAME,
      Key,
      Body: Buffer.concat(chunks),
      ContentType: file.type,
      ACL: 'public-read',
    };

    const data = await s3.send(new PutObjectCommand(putParams));

    if (data.$metadata.httpStatusCode === 200) {
      return NextResponse.json({
        url: `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${Key}`,
      });
    } else {
      return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
    }
  } catch (error: any) {
    console.log(error);

    return new Response(JSON.stringify({ message: error.message }), { status: 500 });
  }
}
