using QRCoder;

namespace Business.Services;

public class QrCodeService
{
    public string GenerateQrCodeBase64(string content)
    {
        var qrGenerator = new QRCodeGenerator();
        var qrData = qrGenerator.CreateQrCode(content, QRCodeGenerator.ECCLevel.Q);
        var qrCode = new PngByteQRCode(qrData);

        var bytes = qrCode.GetGraphic(20);
        return Convert.ToBase64String(bytes);
    }
}
