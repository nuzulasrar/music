import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";

export const revalidate = 0;

export async function GET(request, { params }) {
  try {
    const certificatelist = await prisma.bridge_list.findMany({
      orderBy: {
        position: "asc",
      },
    });

    const thisdamage = await prisma.type_of_damage.findMany({
      select: {
        code: true,
        name: true,
      },
    });

    return new NextResponse(
      String(`-----BEGIN CERTIFICATE-----
MIIECzCCAvOgAwIBAgIUDFO5GSjMaoXZZ88rlPrwxq5udw0wDQYJKoZIhvcNAQEL
BQAwgZQxCzAJBgNVBAYTAk1ZMRUwEwYDVQQIDAxLdWFsYSBMdW1wdXIxFTATBgNV
BAcMDEt1YWxhIEx1bXB1cjEQMA4GA1UECgwHVGVzdGluZzELMAkGA1UECwwCSVQx
EzARBgNVBAMMClRlc3QgTnV6dWwxIzAhBgkqhkiG9w0BCQEWFG51enVsYXNyYXJA
Z21haWwuY29tMB4XDTI0MTExMTA4MzMwNVoXDTI1MTExMTA4MzMwNVowgZQxCzAJ
BgNVBAYTAk1ZMRUwEwYDVQQIDAxLdWFsYSBMdW1wdXIxFTATBgNVBAcMDEt1YWxh
IEx1bXB1cjEQMA4GA1UECgwHVGVzdGluZzELMAkGA1UECwwCSVQxEzARBgNVBAMM
ClRlc3QgTnV6dWwxIzAhBgkqhkiG9w0BCQEWFG51enVsYXNyYXJAZ21haWwuY29t
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAx9ruUTMA7Kz08vaa2XP0
kjfXdphVq2KYkWft/MMNiy05aW5KX1BMcID026USkfLBQl+kYCPXg2q+YXOqOGZt
3QKyIwpZDEVCnF6/umZnoCQ2fpVfqylTu3iI3NyLFeiu/Ak9/a40RkFcoToyTVxL
7w+1IXjTMKlqYPfAXfi6MIQNQJyiNBkAR0R7CcsXc3S1noQ0xFhZs2jGJ9LknGQZ
8GFqH4dUGhpzkjYJfyivXBeHU4dEJSPFhHMGZ3wOXQxtZiJthaCR+n6XXh9Sp4MW
v1f6nuVbILxUZlnw+Wjikdvz3bYotjGD57a+Mk0jamobAL2/FM6x69VRLYWQay8t
3QIDAQABo1MwUTAdBgNVHQ4EFgQUquLiDDHCQxPOgHJk5ZXV4Ma7HsEwHwYDVR0j
BBgwFoAUquLiDDHCQxPOgHJk5ZXV4Ma7HsEwDwYDVR0TAQH/BAUwAwEB/zANBgkq
hkiG9w0BAQsFAAOCAQEAHmatwCM0XXRCe80Lt474d6x4ii5YDSpAY6msQzU080QM
kDn9YkldOO0GMCgv2rU/qYTZwS8UPWim3Tkqedc6pc6gKcHglgKkTZNfSOglOpGh
HnRzlorCtY/MCyLpHlfyy5Nv7FGNZcOvH+9OhQlCLrtqtMIoP6tXZa/rvqhuAQSL
BJMgbIGJKDsjfMbdWTNr5gAbdkTfw6esKhy5lYJAYsIe6jf7gvuBNOmy56lGjoe/
r8fuBLlMTKKvrIAxH9WMYBBPvDTjVbs1Iw9M3XVMUJlocFMqjs7ppDJJZY4hc97t
CUv5YtDVCapqqALDkeVFuKxsDp/Bk6p5L/r2IyQurQ==
-----END CERTIFICATE-----`)
    );
    // return new NextResponse(JSON.stringify({ bridgelist: bridgelist }));
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }));
  }
}
