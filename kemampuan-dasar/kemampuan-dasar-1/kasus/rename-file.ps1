function renamFile {
    
    param(
    
        [Parameter(Mandatory=$true)][string]$directory,
        [Parameter(Mandatory=$true)][string]$renamefile
    
    )

    Rename-Item $directory $renamefile

    Write-Host " file in $directory, has been changed is $renamfile "

}


function choose{
    
    param(
    
        [Parameter(Mandatory=$true)][string]$search,
        [Parameter(Mandatory=$true)][string]$yes_no

    )

    if($yes_no -eq "y")
    {
    
    renamFile $search

    } 
    else
    {
        Write-Host "Your file is there, not replaced"
    }

}

function search{

    param(
    
        [Parameter(Mandatory=$true)][string]$direktory

    )

    $search = Get-ChildItem -Path $Path -Include *.java -Recurse

    if($search)
    {
        Write-Host "file found {$search}"
        
        choose $search
    }
    else
    {
        
        Write-Host " file doesn exist"
        
    }


}

Write-Host "================== program ganti nama file java ===================="
search