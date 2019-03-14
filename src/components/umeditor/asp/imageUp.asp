<%@ LANGUAGE="VBSCRIPT" CODEPAGE="936" %> 
<!--#include file="Uploader.Class.asp"-->
<!--#include file="json.asp"-->

<%
    'Author: techird
    'Date: 2013/09/29

    '����
    'MAX_SIZE �������趨��֮��������ִ��ϴ�ʧ�ܣ���ִ�����²���
    'IIS 6 
        '�ҵ�λ�� C:\Windows\System32\Inetsrv �е� metabase.XML �򿪣��ҵ�ASPMaxRequestEntityAllowed �����޸�Ϊ��Ҫ��ֵ����10240000��10M��
    'IIS 7
        '��IIS����̨��ѡ�� ASP����������������һ�����������ʵ���������ơ���������Ҫ��ֵ

    Dim up, json, path, callback

    Set up = new Uploader
    up.MaxSize = 10 * 1024 * 1024
    up.AllowType = Array(".gif", ".png", ".jpg", ".jpeg", ".bmp")
    up.ProcessForm()

    up.FileField = "upfile"
    up.SavePath = "upload/"
    up.SaveFile()

    Session.CodePage = 936
    Response.AddHeader "Content-Type", "text/html;charset=gbk"
    SetLocale 2052

    Set json = jsObject()
    json("originalName") = up.OriginalFileName
    json("name") = up.FileName
    json("url") = up.FilePath
    json("size") = up.FileSize
    json("state") = up.State
    json("type") = up.FileType

    callback = up.FormValues.Item("callback")

    If IsEmpty( callback ) Then
        Response.Write json.jsString()
    Else
        Response.Write "<script>" & callback & "( JSON.parse(" & json.jsString() & "));</script>"
    End If

    Function IsInArray(arr, elem)
        IsInArray = false
        For Each i In arr
            If i = elem Then IsInArray = true
        Next
    End Function
%>