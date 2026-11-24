Add-Type -AssemblyName System.Drawing
$flyerPath = "C:\Users\sompa\Desktop\prince\pramod_silai_studio\public\assets\contact-flyer.jpg"
$destPath = "C:\Users\sompa\Desktop\prince\pramod_silai_studio\public\assets\chapra-map.jpg"
$img = [System.Drawing.Image]::FromFile($flyerPath)

# The map card in the flyer:
# Left margin: 23, Top: 595, Width: 385, Height: 151
# To ensure zero outer cream border, let's take a safe 2px inset inside the map image border
$x = 23
$y = 595
$w = 385
$h = 151

$rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
$bmp = New-Object System.Drawing.Bitmap($w, $h)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $w, $h)), $rect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$img.Dispose()

$bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)

# Check corner colors
$p1 = $bmp.GetPixel(4, 4)
$p2 = $bmp.GetPixel($w - 5, 4)
$p3 = $bmp.GetPixel(4, $h - 5)
$p4 = $bmp.GetPixel($w - 5, $h - 5)

Write-Output "Corners (R,G,B):"
Write-Output "TopLeft: $($p1.R), $($p1.G), $($p1.B)"
Write-Output "TopRight: $($p2.R), $($p2.G), $($p2.B)"
Write-Output "BottomLeft: $($p3.R), $($p3.G), $($p3.B)"
Write-Output "BottomRight: $($p4.R), $($p4.G), $($p4.B)"

$bmp.Dispose()
Write-Output "Cropped map successfully without outer cream artifacts"
