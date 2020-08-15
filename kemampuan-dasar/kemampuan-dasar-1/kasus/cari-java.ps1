

function search{


    param
    (
        [Parameter(Mandatory=$true)][string]$direktori
    )
    
    $search=Get-Childitem -Path $Path -Include *.java -Recurse
    
    if($search)
    {
        Write-Host "file java found in {$search}"
    }
    else
    {
        Write-Host "file java not found T_T"
    }

}

Write-Host "=============Program Cari File Java================"
search