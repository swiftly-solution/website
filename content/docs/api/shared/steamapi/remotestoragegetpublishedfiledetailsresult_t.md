---
title: RemoteStorageGetPublishedFileDetailsResult_t
---

```csharp
public struct RemoteStorageGetPublishedFileDetailsResult_t
```

#### Inherited Members

## Fields

### k_iCallback

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L1846)

```csharp
public const int k_iCallback = 1318
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m_bAcceptedForUse

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L1900)

```csharp
public bool m_bAcceptedForUse
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### m_bBanned

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L1872)

```csharp
public bool m_bBanned
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### m_bTagsTruncated

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L1881)

```csharp
public bool m_bTagsTruncated
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### m_eFileType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L1898)

```csharp
public EWorkshopFileType m_eFileType
```

#### Field Value

- [EWorkshopFileType](/docs/api/shared/steamapi/eworkshopfiletype)

### m_eResult

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L1847)

```csharp
public EResult m_eResult
```

#### Field Value

- [EResult](/docs/api/shared/steamapi/eresult)

### m_eVisibility

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L1870)

```csharp
public ERemoteStoragePublishedFileVisibility m_eVisibility
```

#### Field Value

- [ERemoteStoragePublishedFileVisibility](/docs/api/shared/steamapi/eremotestoragepublishedfilevisibility)

### m_hFile

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L1865)

```csharp
public UGCHandle_t m_hFile
```

#### Field Value

- [UGCHandle_t](/docs/api/shared/steamapi/ugchandle_t)

### m_hPreviewFile

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L1866)

```csharp
public UGCHandle_t m_hPreviewFile
```

#### Field Value

- [UGCHandle_t](/docs/api/shared/steamapi/ugchandle_t)

### m_nConsumerAppID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L1850)

```csharp
public AppId_t m_nConsumerAppID
```

#### Field Value

- [AppId_t](/docs/api/shared/steamapi/appid_t)

### m_nCreatorAppID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L1849)

```csharp
public AppId_t m_nCreatorAppID
```

#### Field Value

- [AppId_t](/docs/api/shared/steamapi/appid_t)

### m_nFileSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L1889)

```csharp
public int m_nFileSize
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m_nPreviewFileSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L1890)

```csharp
public int m_nPreviewFileSize
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m_nPublishedFileId

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L1848)

```csharp
public PublishedFileId_t m_nPublishedFileId
```

#### Field Value

- [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)

### m_rtimeCreated

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L1868)

```csharp
public uint m_rtimeCreated
```

#### Field Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### m_rtimeUpdated

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L1869)

```csharp
public uint m_rtimeUpdated
```

#### Field Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### m_ulSteamIDOwner

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L1867)

```csharp
public ulong m_ulSteamIDOwner
```

#### Field Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

## Properties

### m_pchFileName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L1884)

```csharp
public string m_pchFileName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### m_rgchDescription

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L1860)

```csharp
public string m_rgchDescription { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### m_rgchTags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L1875)

```csharp
public string m_rgchTags { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### m_rgchTitle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L1853)

```csharp
public string m_rgchTitle { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### m_rgchURL

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L1893)

```csharp
public string m_rgchURL { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

