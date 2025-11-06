---
title: SteamGameServerUGC
---

```csharp
public static class SteamGameServerUGC
```

#### Inheritance

#### Inherited Members

## Methods

### AddAppDependency(PublishedFileId_t, AppId_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L802)

```csharp
public static SteamAPICall_t AddAppDependency(PublishedFileId_t nPublishedFileID, AppId_t nAppID)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)
- **nAppID**: [AppId_t](/docs/api/shared/steamapi/appid_t)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### AddContentDescriptor(UGCUpdateHandle_t, EUGCContentDescriptorID)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L592)

```csharp
public static bool AddContentDescriptor(UGCUpdateHandle_t handle, EUGCContentDescriptorID descid)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/shared/steamapi/ugcupdatehandle_t)
- **descid**: [EUGCContentDescriptorID](/docs/api/shared/steamapi/eugccontentdescriptorid)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AddDependency(PublishedFileId_t, PublishedFileId_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L787)

```csharp
public static SteamAPICall_t AddDependency(PublishedFileId_t nParentPublishedFileID, PublishedFileId_t nChildPublishedFileID)
```

#### Parameters

- **nParentPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)
- **nChildPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### AddExcludedTag(UGCQueryHandle_t, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L235)

```csharp
public static bool AddExcludedTag(UGCQueryHandle_t handle, string pTagName)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **pTagName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AddItemKeyValueTag(UGCUpdateHandle_t, string, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L525)

```csharp
public static bool AddItemKeyValueTag(UGCUpdateHandle_t handle, string pchKey, string pchValue)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/shared/steamapi/ugcupdatehandle_t)
- **pchKey**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pchValue**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AddItemPreviewFile(UGCUpdateHandle_t, string, EItemPreviewType)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L538)

```csharp
public static bool AddItemPreviewFile(UGCUpdateHandle_t handle, string pszPreviewFile, EItemPreviewType type)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/shared/steamapi/ugcupdatehandle_t)
- **pszPreviewFile**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **type**: [EItemPreviewType](/docs/api/shared/steamapi/eitempreviewtype)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AddItemPreviewVideo(UGCUpdateHandle_t, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L550)

```csharp
public static bool AddItemPreviewVideo(UGCUpdateHandle_t handle, string pszVideoID)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/shared/steamapi/ugcupdatehandle_t)
- **pszVideoID**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AddItemToFavorites(AppId_t, PublishedFileId_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L650)

```csharp
public static SteamAPICall_t AddItemToFavorites(AppId_t nAppId, PublishedFileId_t nPublishedFileID)
```

#### Parameters

- **nAppId**: [AppId_t](/docs/api/shared/steamapi/appid_t)
- **nPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### AddRequiredKeyValueTag(UGCQueryHandle_t, string, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L364)

```csharp
public static bool AddRequiredKeyValueTag(UGCQueryHandle_t handle, string pKey, string pValue)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **pKey**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pValue**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AddRequiredTag(UGCQueryHandle_t, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L217)

```csharp
public static bool AddRequiredTag(UGCQueryHandle_t handle, string pTagName)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **pTagName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AddRequiredTagGroup(UGCQueryHandle_t, IList)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L229)

```csharp
public static bool AddRequiredTagGroup(UGCQueryHandle_t handle, IList<string> pTagGroups)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **pTagGroups**: [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BInitWorkshopForGameServer(DepotId_t, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L745)

```csharp
public static bool BInitWorkshopForGameServer(DepotId_t unWorkshopDepotID, string pszFolder)
```

#### Parameters

- **unWorkshopDepotID**: [DepotId_t](/docs/api/shared/steamapi/depotid_t)
- **pszFolder**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CreateItem(AppId_t, EWorkshopFileType)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L387)

```csharp
public static SteamAPICall_t CreateItem(AppId_t nConsumerAppId, EWorkshopFileType eFileType)
```

#### Parameters

- **nConsumerAppId**: [AppId_t](/docs/api/shared/steamapi/appid_t)
- **eFileType**: [EWorkshopFileType](/docs/api/shared/steamapi/eworkshopfiletype)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### CreateQueryAllUGCRequest(EUGCQuery, EUGCMatchingUGCType, AppId_t, AppId_t, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L20)

```csharp
public static UGCQueryHandle_t CreateQueryAllUGCRequest(EUGCQuery eQueryType, EUGCMatchingUGCType eMatchingeMatchingUGCTypeFileType, AppId_t nCreatorAppID, AppId_t nConsumerAppID, uint unPage)
```

#### Parameters

- **eQueryType**: [EUGCQuery](/docs/api/shared/steamapi/eugcquery)
- **eMatchingeMatchingUGCTypeFileType**: [EUGCMatchingUGCType](/docs/api/shared/steamapi/eugcmatchingugctype)
- **nCreatorAppID**: [AppId_t](/docs/api/shared/steamapi/appid_t)
- **nConsumerAppID**: [AppId_t](/docs/api/shared/steamapi/appid_t)
- **unPage**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)

### CreateQueryAllUGCRequest(EUGCQuery, EUGCMatchingUGCType, AppId_t, AppId_t, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L29)

```csharp
public static UGCQueryHandle_t CreateQueryAllUGCRequest(EUGCQuery eQueryType, EUGCMatchingUGCType eMatchingeMatchingUGCTypeFileType, AppId_t nCreatorAppID, AppId_t nConsumerAppID, string pchCursor = null)
```

#### Parameters

- **eQueryType**: [EUGCQuery](/docs/api/shared/steamapi/eugcquery)
- **eMatchingeMatchingUGCTypeFileType**: [EUGCMatchingUGCType](/docs/api/shared/steamapi/eugcmatchingugctype)
- **nCreatorAppID**: [AppId_t](/docs/api/shared/steamapi/appid_t)
- **nConsumerAppID**: [AppId_t](/docs/api/shared/steamapi/appid_t)
- **pchCursor**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)

### CreateQueryUGCDetailsRequest(PublishedFileId_t[], uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L41)

```csharp
public static UGCQueryHandle_t CreateQueryUGCDetailsRequest(PublishedFileId_t[] pvecPublishedFileID, uint unNumPublishedFileIDs)
```

#### Parameters

- **pvecPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)[]
- **unNumPublishedFileIDs**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)

### CreateQueryUserUGCRequest(AccountID_t, EUserUGCList, EUGCMatchingUGCType, EUserUGCListSortOrder, AppId_t, AppId_t, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L11)

```csharp
public static UGCQueryHandle_t CreateQueryUserUGCRequest(AccountID_t unAccountID, EUserUGCList eListType, EUGCMatchingUGCType eMatchingUGCType, EUserUGCListSortOrder eSortOrder, AppId_t nCreatorAppID, AppId_t nConsumerAppID, uint unPage)
```

#### Parameters

- **unAccountID**: [AccountID_t](/docs/api/shared/steamapi/accountid_t)
- **eListType**: [EUserUGCList](/docs/api/shared/steamapi/euserugclist)
- **eMatchingUGCType**: [EUGCMatchingUGCType](/docs/api/shared/steamapi/eugcmatchingugctype)
- **eSortOrder**: [EUserUGCListSortOrder](/docs/api/shared/steamapi/euserugclistsortorder)
- **nCreatorAppID**: [AppId_t](/docs/api/shared/steamapi/appid_t)
- **nConsumerAppID**: [AppId_t](/docs/api/shared/steamapi/appid_t)
- **unPage**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)

### DeleteItem(PublishedFileId_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L827)

```csharp
public static SteamAPICall_t DeleteItem(PublishedFileId_t nPublishedFileID)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### DownloadItem(PublishedFileId_t, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L735)

```csharp
public static bool DownloadItem(PublishedFileId_t nPublishedFileID, bool bHighPriority)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)
- **bHighPriority**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetAppDependencies(PublishedFileId_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L818)

```csharp
public static SteamAPICall_t GetAppDependencies(PublishedFileId_t nPublishedFileID)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### GetItemDownloadInfo(PublishedFileId_t, out ulong, out ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L724)

```csharp
public static bool GetItemDownloadInfo(PublishedFileId_t nPublishedFileID, out ulong punBytesDownloaded, out ulong punBytesTotal)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)
- **punBytesDownloaded**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)
- **punBytesTotal**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetItemInstallInfo(PublishedFileId_t, out ulong, out string, uint, out uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L711)

```csharp
public static bool GetItemInstallInfo(PublishedFileId_t nPublishedFileID, out ulong punSizeOnDisk, out string pchFolder, uint cchFolderSize, out uint punTimeStamp)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)
- **punSizeOnDisk**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)
- **pchFolder**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchFolderSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **punTimeStamp**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetItemState(PublishedFileId_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L701)

```csharp
public static uint GetItemState(PublishedFileId_t nPublishedFileID)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetItemUpdateProgress(UGCUpdateHandle_t, out ulong, out ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L629)

```csharp
public static EItemUpdateStatus GetItemUpdateProgress(UGCUpdateHandle_t handle, out ulong punBytesProcessed, out ulong punBytesTotal)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/shared/steamapi/ugcupdatehandle_t)
- **punBytesProcessed**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)
- **punBytesTotal**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [EItemUpdateStatus](/docs/api/shared/steamapi/eitemupdatestatus)

### GetNumSubscribedItems(bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L683)

```csharp
public static uint GetNumSubscribedItems(bool bIncludeLocallyDisabled = false)
```

#### Parameters

- **bIncludeLocallyDisabled**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetNumSupportedGameVersions(UGCQueryHandle_t, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L180)

```csharp
public static uint GetNumSupportedGameVersions(UGCQueryHandle_t handle, uint index)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetQueryUGCAdditionalPreview(UGCQueryHandle_t, uint, uint, out string, uint, out string, uint, out EItemPreviewType)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L129)

```csharp
public static bool GetQueryUGCAdditionalPreview(UGCQueryHandle_t handle, uint index, uint previewIndex, out string pchURLOrVideoID, uint cchURLSize, out string pchOriginalFileName, uint cchOriginalFileNameSize, out EItemPreviewType pPreviewType)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **previewIndex**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pchURLOrVideoID**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchURLSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pchOriginalFileName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchOriginalFileNameSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pPreviewType**: [EItemPreviewType](/docs/api/shared/steamapi/eitempreviewtype)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetQueryUGCChildren(UGCQueryHandle_t, uint, PublishedFileId_t[], uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L111)

```csharp
public static bool GetQueryUGCChildren(UGCQueryHandle_t handle, uint index, PublishedFileId_t[] pvecPublishedFileID, uint cMaxEntries)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pvecPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)[]
- **cMaxEntries**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetQueryUGCContentDescriptors(UGCQueryHandle_t, uint, out EUGCContentDescriptorID, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L199)

```csharp
public static uint GetQueryUGCContentDescriptors(UGCQueryHandle_t handle, uint index, out EUGCContentDescriptorID pvecDescriptors, uint cMaxEntries)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pvecDescriptors**: [EUGCContentDescriptorID](/docs/api/shared/steamapi/eugccontentdescriptorid)
- **cMaxEntries**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetQueryUGCKeyValueTag(UGCQueryHandle_t, uint, uint, out string, uint, out string, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L148)

```csharp
public static bool GetQueryUGCKeyValueTag(UGCQueryHandle_t handle, uint index, uint keyValueTagIndex, out string pchKey, uint cchKeySize, out string pchValue, uint cchValueSize)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **keyValueTagIndex**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pchKey**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchKeySize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pchValue**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchValueSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetQueryUGCKeyValueTag(UGCQueryHandle_t, uint, string, out string, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L164)

```csharp
public static bool GetQueryUGCKeyValueTag(UGCQueryHandle_t handle, uint index, string pchKey, out string pchValue, uint cchValueSize)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pchKey**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pchValue**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchValueSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetQueryUGCMetadata(UGCQueryHandle_t, uint, out string, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L101)

```csharp
public static bool GetQueryUGCMetadata(UGCQueryHandle_t handle, uint index, out string pchMetadata, uint cchMetadatasize)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pchMetadata**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchMetadatasize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetQueryUGCNumAdditionalPreviews(UGCQueryHandle_t, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L123)

```csharp
public static uint GetQueryUGCNumAdditionalPreviews(UGCQueryHandle_t handle, uint index)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetQueryUGCNumKeyValueTags(UGCQueryHandle_t, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L142)

```csharp
public static uint GetQueryUGCNumKeyValueTags(UGCQueryHandle_t handle, uint index)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetQueryUGCNumTags(UGCQueryHandle_t, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L65)

```csharp
public static uint GetQueryUGCNumTags(UGCQueryHandle_t handle, uint index)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetQueryUGCPreviewURL(UGCQueryHandle_t, uint, out string, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L91)

```csharp
public static bool GetQueryUGCPreviewURL(UGCQueryHandle_t handle, uint index, out string pchURL, uint cchURLSize)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pchURL**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchURLSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetQueryUGCResult(UGCQueryHandle_t, uint, out SteamUGCDetails_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L59)

```csharp
public static bool GetQueryUGCResult(UGCQueryHandle_t handle, uint index, out SteamUGCDetails_t pDetails)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pDetails**: [SteamUGCDetails_t](/docs/api/shared/steamapi/steamugcdetails_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetQueryUGCStatistic(UGCQueryHandle_t, uint, EItemStatistic, out ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L117)

```csharp
public static bool GetQueryUGCStatistic(UGCQueryHandle_t handle, uint index, EItemStatistic eStatType, out ulong pStatValue)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **eStatType**: [EItemStatistic](/docs/api/shared/steamapi/eitemstatistic)
- **pStatValue**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetQueryUGCTag(UGCQueryHandle_t, uint, uint, out string, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L71)

```csharp
public static bool GetQueryUGCTag(UGCQueryHandle_t handle, uint index, uint indexTag, out string pchValue, uint cchValueSize)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **indexTag**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pchValue**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchValueSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetQueryUGCTagDisplayName(UGCQueryHandle_t, uint, uint, out string, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L81)

```csharp
public static bool GetQueryUGCTagDisplayName(UGCQueryHandle_t handle, uint index, uint indexTag, out string pchValue, uint cchValueSize)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **indexTag**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pchValue**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchValueSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetSubscribedItems(PublishedFileId_t[], uint, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L692)

```csharp
public static uint GetSubscribedItems(PublishedFileId_t[] pvecPublishedFileID, uint cMaxEntries, bool bIncludeLocallyDisabled = false)
```

#### Parameters

- **pvecPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)[]
- **cMaxEntries**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **bIncludeLocallyDisabled**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetSupportedGameVersionData(UGCQueryHandle_t, uint, uint, out string, out string, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L186)

```csharp
public static bool GetSupportedGameVersionData(UGCQueryHandle_t handle, uint index, uint versionIndex, out string pchGameBranchMin, out string pchGameBranchMax, uint cchGameBranchSize)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **versionIndex**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pchGameBranchMin**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pchGameBranchMax**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchGameBranchSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetUserContentDescriptorPreferences(out EUGCContentDescriptorID, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L854)

```csharp
public static uint GetUserContentDescriptorPreferences(out EUGCContentDescriptorID pvecDescriptors, uint cMaxEntries)
```

#### Parameters

- **pvecDescriptors**: [EUGCContentDescriptorID](/docs/api/shared/steamapi/eugccontentdescriptorid)
- **cMaxEntries**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetUserItemVote(PublishedFileId_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L644)

```csharp
public static SteamAPICall_t GetUserItemVote(PublishedFileId_t nPublishedFileID)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### GetWorkshopEULAStatus()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L845)

```csharp
public static SteamAPICall_t GetWorkshopEULAStatus()
```

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### ReleaseQueryUGCRequest(UGCQueryHandle_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L208)

```csharp
public static bool ReleaseQueryUGCRequest(UGCQueryHandle_t handle)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RemoveAllItemKeyValueTags(UGCUpdateHandle_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L504)

```csharp
public static bool RemoveAllItemKeyValueTags(UGCUpdateHandle_t handle)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/shared/steamapi/ugcupdatehandle_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RemoveAppDependency(PublishedFileId_t, AppId_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L808)

```csharp
public static SteamAPICall_t RemoveAppDependency(PublishedFileId_t nPublishedFileID, AppId_t nAppID)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)
- **nAppID**: [AppId_t](/docs/api/shared/steamapi/appid_t)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### RemoveContentDescriptor(UGCUpdateHandle_t, EUGCContentDescriptorID)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L598)

```csharp
public static bool RemoveContentDescriptor(UGCUpdateHandle_t handle, EUGCContentDescriptorID descid)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/shared/steamapi/ugcupdatehandle_t)
- **descid**: [EUGCContentDescriptorID](/docs/api/shared/steamapi/eugccontentdescriptorid)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RemoveDependency(PublishedFileId_t, PublishedFileId_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L793)

```csharp
public static SteamAPICall_t RemoveDependency(PublishedFileId_t nParentPublishedFileID, PublishedFileId_t nChildPublishedFileID)
```

#### Parameters

- **nParentPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)
- **nChildPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### RemoveItemFromFavorites(AppId_t, PublishedFileId_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L656)

```csharp
public static SteamAPICall_t RemoveItemFromFavorites(AppId_t nAppId, PublishedFileId_t nPublishedFileID)
```

#### Parameters

- **nAppId**: [AppId_t](/docs/api/shared/steamapi/appid_t)
- **nPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### RemoveItemKeyValueTags(UGCUpdateHandle_t, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L513)

```csharp
public static bool RemoveItemKeyValueTags(UGCUpdateHandle_t handle, string pchKey)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/shared/steamapi/ugcupdatehandle_t)
- **pchKey**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RemoveItemPreview(UGCUpdateHandle_t, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L586)

```csharp
public static bool RemoveItemPreview(UGCUpdateHandle_t handle, uint index)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/shared/steamapi/ugcupdatehandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RequestUGCDetails(PublishedFileId_t, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L377)

```csharp
public static SteamAPICall_t RequestUGCDetails(PublishedFileId_t nPublishedFileID, uint unMaxAgeSeconds)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)
- **unMaxAgeSeconds**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### SendQueryUGCRequest(UGCQueryHandle_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L50)

```csharp
public static SteamAPICall_t SendQueryUGCRequest(UGCQueryHandle_t handle)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### SetAdminQuery(UGCUpdateHandle_t, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L310)

```csharp
public static bool SetAdminQuery(UGCUpdateHandle_t handle, bool bAdminQuery)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/shared/steamapi/ugcupdatehandle_t)
- **bAdminQuery**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetAllowCachedResponse(UGCQueryHandle_t, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L301)

```csharp
public static bool SetAllowCachedResponse(UGCQueryHandle_t handle, uint unMaxAgeSeconds)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **unMaxAgeSeconds**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetAllowLegacyUpload(UGCUpdateHandle_t, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L495)

```csharp
public static bool SetAllowLegacyUpload(UGCUpdateHandle_t handle, bool bAllowLegacyUpload)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/shared/steamapi/ugcupdatehandle_t)
- **bAllowLegacyUpload**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetCloudFileNameFilter(UGCQueryHandle_t, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L319)

```csharp
public static bool SetCloudFileNameFilter(UGCQueryHandle_t handle, string pMatchCloudFileName)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **pMatchCloudFileName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetItemContent(UGCUpdateHandle_t, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L471)

```csharp
public static bool SetItemContent(UGCUpdateHandle_t handle, string pszContentFolder)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/shared/steamapi/ugcupdatehandle_t)
- **pszContentFolder**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetItemDescription(UGCUpdateHandle_t, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L417)

```csharp
public static bool SetItemDescription(UGCUpdateHandle_t handle, string pchDescription)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/shared/steamapi/ugcupdatehandle_t)
- **pchDescription**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetItemMetadata(UGCUpdateHandle_t, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L441)

```csharp
public static bool SetItemMetadata(UGCUpdateHandle_t handle, string pchMetaData)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/shared/steamapi/ugcupdatehandle_t)
- **pchMetaData**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetItemPreview(UGCUpdateHandle_t, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L483)

```csharp
public static bool SetItemPreview(UGCUpdateHandle_t handle, string pszPreviewFile)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/shared/steamapi/ugcupdatehandle_t)
- **pszPreviewFile**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetItemTags(UGCUpdateHandle_t, IList, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L462)

```csharp
public static bool SetItemTags(UGCUpdateHandle_t updateHandle, IList<string> pTags, bool bAllowAdminTags = false)
```

#### Parameters

- **updateHandle**: [UGCUpdateHandle_t](/docs/api/shared/steamapi/ugcupdatehandle_t)
- **pTags**: [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>
- **bAllowAdminTags**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetItemTitle(UGCUpdateHandle_t, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L405)

```csharp
public static bool SetItemTitle(UGCUpdateHandle_t handle, string pchTitle)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/shared/steamapi/ugcupdatehandle_t)
- **pchTitle**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetItemUpdateLanguage(UGCUpdateHandle_t, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L429)

```csharp
public static bool SetItemUpdateLanguage(UGCUpdateHandle_t handle, string pchLanguage)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/shared/steamapi/ugcupdatehandle_t)
- **pchLanguage**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetItemVisibility(UGCUpdateHandle_t, ERemoteStoragePublishedFileVisibility)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L453)

```csharp
public static bool SetItemVisibility(UGCUpdateHandle_t handle, ERemoteStoragePublishedFileVisibility eVisibility)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/shared/steamapi/ugcupdatehandle_t)
- **eVisibility**: [ERemoteStoragePublishedFileVisibility](/docs/api/shared/steamapi/eremotestoragepublishedfilevisibility)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetItemsDisabledLocally(out PublishedFileId_t, uint, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L863)

```csharp
public static bool SetItemsDisabledLocally(out PublishedFileId_t pvecPublishedFileIDs, uint unNumPublishedFileIDs, bool bDisabledLocally)
```

#### Parameters

- **pvecPublishedFileIDs**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)
- **unNumPublishedFileIDs**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **bDisabledLocally**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetLanguage(UGCQueryHandle_t, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L292)

```csharp
public static bool SetLanguage(UGCQueryHandle_t handle, string pchLanguage)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **pchLanguage**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetMatchAnyTag(UGCQueryHandle_t, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L331)

```csharp
public static bool SetMatchAnyTag(UGCQueryHandle_t handle, bool bMatchAnyTag)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **bMatchAnyTag**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetRankedByTrendDays(UGCQueryHandle_t, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L346)

```csharp
public static bool SetRankedByTrendDays(UGCQueryHandle_t handle, uint unDays)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **unDays**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetRequiredGameVersions(UGCUpdateHandle_t, string, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L607)

```csharp
public static bool SetRequiredGameVersions(UGCUpdateHandle_t handle, string pszGameBranchMin, string pszGameBranchMax)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/shared/steamapi/ugcupdatehandle_t)
- **pszGameBranchMin**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pszGameBranchMax**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetReturnAdditionalPreviews(UGCQueryHandle_t, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L274)

```csharp
public static bool SetReturnAdditionalPreviews(UGCQueryHandle_t handle, bool bReturnAdditionalPreviews)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **bReturnAdditionalPreviews**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetReturnChildren(UGCQueryHandle_t, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L268)

```csharp
public static bool SetReturnChildren(UGCQueryHandle_t handle, bool bReturnChildren)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **bReturnChildren**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetReturnKeyValueTags(UGCQueryHandle_t, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L250)

```csharp
public static bool SetReturnKeyValueTags(UGCQueryHandle_t handle, bool bReturnKeyValueTags)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **bReturnKeyValueTags**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetReturnLongDescription(UGCQueryHandle_t, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L256)

```csharp
public static bool SetReturnLongDescription(UGCQueryHandle_t handle, bool bReturnLongDescription)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **bReturnLongDescription**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetReturnMetadata(UGCQueryHandle_t, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L262)

```csharp
public static bool SetReturnMetadata(UGCQueryHandle_t handle, bool bReturnMetadata)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **bReturnMetadata**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetReturnOnlyIDs(UGCQueryHandle_t, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L244)

```csharp
public static bool SetReturnOnlyIDs(UGCQueryHandle_t handle, bool bReturnOnlyIDs)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **bReturnOnlyIDs**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetReturnPlaytimeStats(UGCQueryHandle_t, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L286)

```csharp
public static bool SetReturnPlaytimeStats(UGCQueryHandle_t handle, uint unDays)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **unDays**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetReturnTotalOnly(UGCQueryHandle_t, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L280)

```csharp
public static bool SetReturnTotalOnly(UGCQueryHandle_t handle, bool bReturnTotalOnly)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **bReturnTotalOnly**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetSearchText(UGCQueryHandle_t, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L337)

```csharp
public static bool SetSearchText(UGCQueryHandle_t handle, string pSearchText)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **pSearchText**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetSubscriptionsLoadOrder(out PublishedFileId_t, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L872)

```csharp
public static bool SetSubscriptionsLoadOrder(out PublishedFileId_t pvecPublishedFileIDs, uint unNumPublishedFileIDs)
```

#### Parameters

- **pvecPublishedFileIDs**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)
- **unNumPublishedFileIDs**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetTimeCreatedDateRange(UGCQueryHandle_t, uint, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L352)

```csharp
public static bool SetTimeCreatedDateRange(UGCQueryHandle_t handle, uint rtStart, uint rtEnd)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **rtStart**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **rtEnd**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetTimeUpdatedDateRange(UGCQueryHandle_t, uint, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L358)

```csharp
public static bool SetTimeUpdatedDateRange(UGCQueryHandle_t handle, uint rtStart, uint rtEnd)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **rtStart**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **rtEnd**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetUserItemVote(PublishedFileId_t, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L638)

```csharp
public static SteamAPICall_t SetUserItemVote(PublishedFileId_t nPublishedFileID, bool bVoteUp)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)
- **bVoteUp**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### ShowWorkshopEULA()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L836)

```csharp
public static bool ShowWorkshopEULA()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartItemUpdate(AppId_t, PublishedFileId_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L396)

```csharp
public static UGCUpdateHandle_t StartItemUpdate(AppId_t nConsumerAppId, PublishedFileId_t nPublishedFileID)
```

#### Parameters

- **nConsumerAppId**: [AppId_t](/docs/api/shared/steamapi/appid_t)
- **nPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)

#### Returns

- [UGCUpdateHandle_t](/docs/api/shared/steamapi/ugcupdatehandle_t)

### StartPlaytimeTracking(PublishedFileId_t[], uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L766)

```csharp
public static SteamAPICall_t StartPlaytimeTracking(PublishedFileId_t[] pvecPublishedFileID, uint unNumPublishedFileIDs)
```

#### Parameters

- **pvecPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)[]
- **unNumPublishedFileIDs**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### StopPlaytimeTracking(PublishedFileId_t[], uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L772)

```csharp
public static SteamAPICall_t StopPlaytimeTracking(PublishedFileId_t[] pvecPublishedFileID, uint unNumPublishedFileIDs)
```

#### Parameters

- **pvecPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)[]
- **unNumPublishedFileIDs**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### StopPlaytimeTrackingForAllItems()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L778)

```csharp
public static SteamAPICall_t StopPlaytimeTrackingForAllItems()
```

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### SubmitItemUpdate(UGCUpdateHandle_t, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L620)

```csharp
public static SteamAPICall_t SubmitItemUpdate(UGCUpdateHandle_t handle, string pchChangeNote)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/shared/steamapi/ugcupdatehandle_t)
- **pchChangeNote**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### SubscribeItem(PublishedFileId_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L665)

```csharp
public static SteamAPICall_t SubscribeItem(PublishedFileId_t nPublishedFileID)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### SuspendDownloads(bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L757)

```csharp
public static void SuspendDownloads(bool bSuspend)
```

#### Parameters

- **bSuspend**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UnsubscribeItem(PublishedFileId_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L674)

```csharp
public static SteamAPICall_t UnsubscribeItem(PublishedFileId_t nPublishedFileID)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/shared/steamapi/publishedfileid_t)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### UpdateItemPreviewFile(UGCUpdateHandle_t, uint, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L562)

```csharp
public static bool UpdateItemPreviewFile(UGCUpdateHandle_t handle, uint index, string pszPreviewFile)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/shared/steamapi/ugcupdatehandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pszPreviewFile**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UpdateItemPreviewVideo(UGCUpdateHandle_t, uint, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L574)

```csharp
public static bool UpdateItemPreviewVideo(UGCUpdateHandle_t handle, uint index, string pszVideoID)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/shared/steamapi/ugcupdatehandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pszVideoID**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

