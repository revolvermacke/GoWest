using QRCoder;

namespace Business.Services;

public class QrCodeService
{
    public string GenerateQrCodeBase64(string content)
    {
        var qrGenerator = new QRCodeGenerator();
        var qrData = qrGenerator.CreateQrCode(content, QRCodeGenerator.ECCLevel.Q);
        var qrCode = new PngByteQRCode(qrData);

        var bytes = qrCode.GetGraphic(
            pixelsPerModule: 20,
            darkColorRgba: new byte[] { 0, 0, 0, 255 },
            lightColorRgba: new byte[] { 255, 255, 255, 255 },
            drawQuietZones: false
        );
        return Convert.ToBase64String(bytes);
    }
}
