---
title: SteamGameServerUGC
---

# Class SteamGameServerUGC

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L6)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public static class SteamGameServerUGC
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [SteamGameServerUGC](/docs/api/steamapi/steamgameserverugc)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### AddAppDependency(PublishedFileId_t, AppId_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L802)

<p> add/remove app dependence/requirements (usually DLC)</p>

```csharp
public static SteamAPICall_t AddAppDependency(PublishedFileId_t nPublishedFileID, AppId_t nAppID)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)
- **nAppID**: [AppId_t](/docs/api/steamapi/appid_t)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### AddContentDescriptor(UGCUpdateHandle_t, EUGCContentDescriptorID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L592)

```csharp
public static bool AddContentDescriptor(UGCUpdateHandle_t handle, EUGCContentDescriptorID descid)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/steamapi/ugcupdatehandle_t)
- **descid**: [EUGCContentDescriptorID](/docs/api/steamapi/eugccontentdescriptorid)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AddDependency(PublishedFileId_t, PublishedFileId_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L787)

<p> parent-child relationship or dependency management</p>

```csharp
public static SteamAPICall_t AddDependency(PublishedFileId_t nParentPublishedFileID, PublishedFileId_t nChildPublishedFileID)
```

#### Parameters

- **nParentPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)
- **nChildPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### AddExcludedTag(UGCQueryHandle_t, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L235)

```csharp
public static bool AddExcludedTag(UGCQueryHandle_t handle, string pTagName)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **pTagName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AddItemKeyValueTag(UGCUpdateHandle_t, string, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L525)

<p> add new key-value tags for the item. Note that there can be multiple values for a tag.</p>

```csharp
public static bool AddItemKeyValueTag(UGCUpdateHandle_t handle, string pchKey, string pchValue)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/steamapi/ugcupdatehandle_t)
- **pchKey**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pchValue**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AddItemPreviewFile(UGCUpdateHandle_t, string, EItemPreviewType)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L538)

<p>  add preview file for this item. pszPreviewFile points to local file, which must be under 1MB in size</p>

```csharp
public static bool AddItemPreviewFile(UGCUpdateHandle_t handle, string pszPreviewFile, EItemPreviewType type)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/steamapi/ugcupdatehandle_t)
- **pszPreviewFile**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **type**: [EItemPreviewType](/docs/api/steamapi/eitempreviewtype)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AddItemPreviewVideo(UGCUpdateHandle_t, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L550)

<p>  add preview video for this item</p>

```csharp
public static bool AddItemPreviewVideo(UGCUpdateHandle_t handle, string pszVideoID)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/steamapi/ugcupdatehandle_t)
- **pszVideoID**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AddItemToFavorites(AppId_t, PublishedFileId_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L650)

```csharp
public static SteamAPICall_t AddItemToFavorites(AppId_t nAppId, PublishedFileId_t nPublishedFileID)
```

#### Parameters

- **nAppId**: [AppId_t](/docs/api/steamapi/appid_t)
- **nPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### AddRequiredKeyValueTag(UGCQueryHandle_t, string, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L364)

```csharp
public static bool AddRequiredKeyValueTag(UGCQueryHandle_t handle, string pKey, string pValue)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **pKey**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pValue**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AddRequiredTag(UGCQueryHandle_t, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L217)

<p> Options to set for querying UGC</p>

```csharp
public static bool AddRequiredTag(UGCQueryHandle_t handle, string pTagName)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **pTagName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AddRequiredTagGroup(UGCQueryHandle_t, IList)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L229)

<p> match any of the tags in this group</p>

```csharp
public static bool AddRequiredTagGroup(UGCQueryHandle_t handle, IList<string> pTagGroups)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **pTagGroups**: [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BInitWorkshopForGameServer(DepotId_t, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L745)

<p> game servers can set a specific workshop folder before issuing any UGC commands.</p>
<p> This is helpful if you want to support multiple game servers running out of the same install folder</p>

```csharp
public static bool BInitWorkshopForGameServer(DepotId_t unWorkshopDepotID, string pszFolder)
```

#### Parameters

- **unWorkshopDepotID**: [DepotId_t](/docs/api/steamapi/depotid_t)
- **pszFolder**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CreateItem(AppId_t, EWorkshopFileType)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L387)

<p> Steam Workshop Creator API</p>
<p> create new item for this app with no content attached yet</p>

```csharp
public static SteamAPICall_t CreateItem(AppId_t nConsumerAppId, EWorkshopFileType eFileType)
```

#### Parameters

- **nConsumerAppId**: [AppId_t](/docs/api/steamapi/appid_t)
- **eFileType**: [EWorkshopFileType](/docs/api/steamapi/eworkshopfiletype)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### CreateQueryAllUGCRequest(EUGCQuery, EUGCMatchingUGCType, AppId_t, AppId_t, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L20)

<p> Query for all matching UGC. Creator app id or consumer app id must be valid and be set to the current running app. unPage should start at 1.</p>

```csharp
public static UGCQueryHandle_t CreateQueryAllUGCRequest(EUGCQuery eQueryType, EUGCMatchingUGCType eMatchingeMatchingUGCTypeFileType, AppId_t nCreatorAppID, AppId_t nConsumerAppID, uint unPage)
```

#### Parameters

- **eQueryType**: [EUGCQuery](/docs/api/steamapi/eugcquery)
- **eMatchingeMatchingUGCTypeFileType**: [EUGCMatchingUGCType](/docs/api/steamapi/eugcmatchingugctype)
- **nCreatorAppID**: [AppId_t](/docs/api/steamapi/appid_t)
- **nConsumerAppID**: [AppId_t](/docs/api/steamapi/appid_t)
- **unPage**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)

### CreateQueryAllUGCRequest(EUGCQuery, EUGCMatchingUGCType, AppId_t, AppId_t, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L29)

<p> Query for all matching UGC using the new deep paging interface. Creator app id or consumer app id must be valid and be set to the current running app. pchCursor should be set to NULL or "*" to get the first result set.</p>

```csharp
public static UGCQueryHandle_t CreateQueryAllUGCRequest(EUGCQuery eQueryType, EUGCMatchingUGCType eMatchingeMatchingUGCTypeFileType, AppId_t nCreatorAppID, AppId_t nConsumerAppID, string pchCursor = null)
```

#### Parameters

- **eQueryType**: [EUGCQuery](/docs/api/steamapi/eugcquery)
- **eMatchingeMatchingUGCTypeFileType**: [EUGCMatchingUGCType](/docs/api/steamapi/eugcmatchingugctype)
- **nCreatorAppID**: [AppId_t](/docs/api/steamapi/appid_t)
- **nConsumerAppID**: [AppId_t](/docs/api/steamapi/appid_t)
- **pchCursor**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)

### CreateQueryUGCDetailsRequest(PublishedFileId_t[], uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L41)

<p> Query for the details of the given published file ids (the RequestUGCDetails call is deprecated and replaced with this)</p>

```csharp
public static UGCQueryHandle_t CreateQueryUGCDetailsRequest(PublishedFileId_t[] pvecPublishedFileID, uint unNumPublishedFileIDs)
```

#### Parameters

- **pvecPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)[]
- **unNumPublishedFileIDs**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)

### CreateQueryUserUGCRequest(AccountID_t, EUserUGCList, EUGCMatchingUGCType, EUserUGCListSortOrder, AppId_t, AppId_t, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L11)

<p> Query UGC associated with a user. Creator app id or consumer app id must be valid and be set to the current running app. unPage should start at 1.</p>

```csharp
public static UGCQueryHandle_t CreateQueryUserUGCRequest(AccountID_t unAccountID, EUserUGCList eListType, EUGCMatchingUGCType eMatchingUGCType, EUserUGCListSortOrder eSortOrder, AppId_t nCreatorAppID, AppId_t nConsumerAppID, uint unPage)
```

#### Parameters

- **unAccountID**: [AccountID_t](/docs/api/steamapi/accountid_t)
- **eListType**: [EUserUGCList](/docs/api/steamapi/euserugclist)
- **eMatchingUGCType**: [EUGCMatchingUGCType](/docs/api/steamapi/eugcmatchingugctype)
- **eSortOrder**: [EUserUGCListSortOrder](/docs/api/steamapi/euserugclistsortorder)
- **nCreatorAppID**: [AppId_t](/docs/api/steamapi/appid_t)
- **nConsumerAppID**: [AppId_t](/docs/api/steamapi/appid_t)
- **unPage**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)

### DeleteItem(PublishedFileId_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L827)

<p> delete the item without prompting the user</p>

```csharp
public static SteamAPICall_t DeleteItem(PublishedFileId_t nPublishedFileID)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### DownloadItem(PublishedFileId_t, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L735)

<p> download new or update already installed item. If function returns true, wait for DownloadItemResult_t. If the item is already installed,</p>
<p> then files on disk should not be used until callback received. If item is not subscribed to, it will be cached for some time.</p>
<p> If bHighPriority is set, any other item download will be suspended and this item downloaded ASAP.</p>

```csharp
public static bool DownloadItem(PublishedFileId_t nPublishedFileID, bool bHighPriority)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)
- **bHighPriority**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetAppDependencies(PublishedFileId_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L818)

<p> request app dependencies. note that whatever callback you register for GetAppDependenciesResult_t may be called multiple times</p>
<p> until all app dependencies have been returned</p>

```csharp
public static SteamAPICall_t GetAppDependencies(PublishedFileId_t nPublishedFileID)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### GetItemDownloadInfo(PublishedFileId_t, out ulong, out ulong)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L724)

<p> get info about pending update for items that have k_EItemStateNeedsUpdate set. punBytesTotal will be valid after download started once</p>

```csharp
public static bool GetItemDownloadInfo(PublishedFileId_t nPublishedFileID, out ulong punBytesDownloaded, out ulong punBytesTotal)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)
- **punBytesDownloaded**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)
- **punBytesTotal**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetItemInstallInfo(PublishedFileId_t, out ulong, out string, uint, out uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L711)

<p> get info about currently installed content on disc for items that have k_EItemStateInstalled set</p>
<p> if k_EItemStateLegacyItem is set, pchFolder contains the path to the legacy file itself (not a folder)</p>

```csharp
public static bool GetItemInstallInfo(PublishedFileId_t nPublishedFileID, out ulong punSizeOnDisk, out string pchFolder, uint cchFolderSize, out uint punTimeStamp)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)
- **punSizeOnDisk**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)
- **pchFolder**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchFolderSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **punTimeStamp**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetItemState(PublishedFileId_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L701)

<p> get EItemState flags about item on this client</p>

```csharp
public static uint GetItemState(PublishedFileId_t nPublishedFileID)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetItemUpdateProgress(UGCUpdateHandle_t, out ulong, out ulong)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L629)

```csharp
public static EItemUpdateStatus GetItemUpdateProgress(UGCUpdateHandle_t handle, out ulong punBytesProcessed, out ulong punBytesTotal)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/steamapi/ugcupdatehandle_t)
- **punBytesProcessed**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)
- **punBytesTotal**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [EItemUpdateStatus](/docs/api/steamapi/eitemupdatestatus)

### GetNumSubscribedItems(bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L683)

<p> number of subscribed items</p>

```csharp
public static uint GetNumSubscribedItems(bool bIncludeLocallyDisabled = false)
```

#### Parameters

- **bIncludeLocallyDisabled**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetNumSupportedGameVersions(UGCQueryHandle_t, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L180)

<p> Some items can specify that they have a version that is valid for a range of game versions (Steam branch)</p>

```csharp
public static uint GetNumSupportedGameVersions(UGCQueryHandle_t handle, uint index)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetQueryUGCAdditionalPreview(UGCQueryHandle_t, uint, uint, out string, uint, out string, uint, out EItemPreviewType)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L129)

```csharp
public static bool GetQueryUGCAdditionalPreview(UGCQueryHandle_t handle, uint index, uint previewIndex, out string pchURLOrVideoID, uint cchURLSize, out string pchOriginalFileName, uint cchOriginalFileNameSize, out EItemPreviewType pPreviewType)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **previewIndex**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pchURLOrVideoID**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchURLSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pchOriginalFileName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchOriginalFileNameSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pPreviewType**: [EItemPreviewType](/docs/api/steamapi/eitempreviewtype)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetQueryUGCChildren(UGCQueryHandle_t, uint, PublishedFileId_t[], uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L111)

```csharp
public static bool GetQueryUGCChildren(UGCQueryHandle_t handle, uint index, PublishedFileId_t[] pvecPublishedFileID, uint cMaxEntries)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pvecPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)[]
- **cMaxEntries**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetQueryUGCContentDescriptors(UGCQueryHandle_t, uint, out EUGCContentDescriptorID, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L199)

```csharp
public static uint GetQueryUGCContentDescriptors(UGCQueryHandle_t handle, uint index, out EUGCContentDescriptorID pvecDescriptors, uint cMaxEntries)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pvecDescriptors**: [EUGCContentDescriptorID](/docs/api/steamapi/eugccontentdescriptorid)
- **cMaxEntries**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetQueryUGCKeyValueTag(UGCQueryHandle_t, uint, uint, out string, uint, out string, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L148)

```csharp
public static bool GetQueryUGCKeyValueTag(UGCQueryHandle_t handle, uint index, uint keyValueTagIndex, out string pchKey, uint cchKeySize, out string pchValue, uint cchValueSize)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **keyValueTagIndex**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pchKey**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchKeySize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pchValue**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchValueSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetQueryUGCKeyValueTag(UGCQueryHandle_t, uint, string, out string, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L164)

<p> Return the first value matching the pchKey. Note that a key may map to multiple values.  Returns false if there was an error or no matching value was found.</p>

```csharp
public static bool GetQueryUGCKeyValueTag(UGCQueryHandle_t handle, uint index, string pchKey, out string pchValue, uint cchValueSize)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pchKey**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pchValue**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchValueSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetQueryUGCMetadata(UGCQueryHandle_t, uint, out string, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L101)

```csharp
public static bool GetQueryUGCMetadata(UGCQueryHandle_t handle, uint index, out string pchMetadata, uint cchMetadatasize)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pchMetadata**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchMetadatasize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetQueryUGCNumAdditionalPreviews(UGCQueryHandle_t, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L123)

```csharp
public static uint GetQueryUGCNumAdditionalPreviews(UGCQueryHandle_t handle, uint index)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetQueryUGCNumKeyValueTags(UGCQueryHandle_t, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L142)

```csharp
public static uint GetQueryUGCNumKeyValueTags(UGCQueryHandle_t handle, uint index)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetQueryUGCNumTags(UGCQueryHandle_t, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L65)

```csharp
public static uint GetQueryUGCNumTags(UGCQueryHandle_t handle, uint index)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetQueryUGCPreviewURL(UGCQueryHandle_t, uint, out string, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L91)

```csharp
public static bool GetQueryUGCPreviewURL(UGCQueryHandle_t handle, uint index, out string pchURL, uint cchURLSize)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pchURL**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchURLSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetQueryUGCResult(UGCQueryHandle_t, uint, out SteamUGCDetails_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L59)

<p> Retrieve an individual result after receiving the callback for querying UGC</p>

```csharp
public static bool GetQueryUGCResult(UGCQueryHandle_t handle, uint index, out SteamUGCDetails_t pDetails)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pDetails**: [SteamUGCDetails_t](/docs/api/steamapi/steamugcdetails_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetQueryUGCStatistic(UGCQueryHandle_t, uint, EItemStatistic, out ulong)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L117)

```csharp
public static bool GetQueryUGCStatistic(UGCQueryHandle_t handle, uint index, EItemStatistic eStatType, out ulong pStatValue)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **eStatType**: [EItemStatistic](/docs/api/steamapi/eitemstatistic)
- **pStatValue**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetQueryUGCTag(UGCQueryHandle_t, uint, uint, out string, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L71)

```csharp
public static bool GetQueryUGCTag(UGCQueryHandle_t handle, uint index, uint indexTag, out string pchValue, uint cchValueSize)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **indexTag**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pchValue**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchValueSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetQueryUGCTagDisplayName(UGCQueryHandle_t, uint, uint, out string, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L81)

```csharp
public static bool GetQueryUGCTagDisplayName(UGCQueryHandle_t handle, uint index, uint indexTag, out string pchValue, uint cchValueSize)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **indexTag**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pchValue**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchValueSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetSubscribedItems(PublishedFileId_t[], uint, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L692)

<p> all subscribed item PublishFileIDs</p>

```csharp
public static uint GetSubscribedItems(PublishedFileId_t[] pvecPublishedFileID, uint cMaxEntries, bool bIncludeLocallyDisabled = false)
```

#### Parameters

- **pvecPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)[]
- **cMaxEntries**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **bIncludeLocallyDisabled**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetSupportedGameVersionData(UGCQueryHandle_t, uint, uint, out string, out string, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L186)

```csharp
public static bool GetSupportedGameVersionData(UGCQueryHandle_t handle, uint index, uint versionIndex, out string pchGameBranchMin, out string pchGameBranchMax, uint cchGameBranchSize)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **versionIndex**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pchGameBranchMin**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pchGameBranchMax**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchGameBranchSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetUserContentDescriptorPreferences(out EUGCContentDescriptorID, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L854)

<p> Return the user's community content descriptor preferences</p>

```csharp
public static uint GetUserContentDescriptorPreferences(out EUGCContentDescriptorID pvecDescriptors, uint cMaxEntries)
```

#### Parameters

- **pvecDescriptors**: [EUGCContentDescriptorID](/docs/api/steamapi/eugccontentdescriptorid)
- **cMaxEntries**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetUserItemVote(PublishedFileId_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L644)

```csharp
public static SteamAPICall_t GetUserItemVote(PublishedFileId_t nPublishedFileID)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### GetWorkshopEULAStatus()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L845)

<p> Retrieve information related to the user's acceptance or not of the app's specific Workshop EULA</p>

```csharp
public static SteamAPICall_t GetWorkshopEULAStatus()
```

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### ReleaseQueryUGCRequest(UGCQueryHandle_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L208)

<p> Release the request to free up memory, after retrieving results</p>

```csharp
public static bool ReleaseQueryUGCRequest(UGCQueryHandle_t handle)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RemoveAllItemKeyValueTags(UGCUpdateHandle_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L504)

<p> remove all existing key-value tags (you can add new ones via the AddItemKeyValueTag function)</p>

```csharp
public static bool RemoveAllItemKeyValueTags(UGCUpdateHandle_t handle)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/steamapi/ugcupdatehandle_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RemoveAppDependency(PublishedFileId_t, AppId_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L808)

```csharp
public static SteamAPICall_t RemoveAppDependency(PublishedFileId_t nPublishedFileID, AppId_t nAppID)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)
- **nAppID**: [AppId_t](/docs/api/steamapi/appid_t)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### RemoveContentDescriptor(UGCUpdateHandle_t, EUGCContentDescriptorID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L598)

```csharp
public static bool RemoveContentDescriptor(UGCUpdateHandle_t handle, EUGCContentDescriptorID descid)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/steamapi/ugcupdatehandle_t)
- **descid**: [EUGCContentDescriptorID](/docs/api/steamapi/eugccontentdescriptorid)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RemoveDependency(PublishedFileId_t, PublishedFileId_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L793)

```csharp
public static SteamAPICall_t RemoveDependency(PublishedFileId_t nParentPublishedFileID, PublishedFileId_t nChildPublishedFileID)
```

#### Parameters

- **nParentPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)
- **nChildPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### RemoveItemFromFavorites(AppId_t, PublishedFileId_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L656)

```csharp
public static SteamAPICall_t RemoveItemFromFavorites(AppId_t nAppId, PublishedFileId_t nPublishedFileID)
```

#### Parameters

- **nAppId**: [AppId_t](/docs/api/steamapi/appid_t)
- **nPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### RemoveItemKeyValueTags(UGCUpdateHandle_t, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L513)

<p> remove any existing key-value tags with the specified key</p>

```csharp
public static bool RemoveItemKeyValueTags(UGCUpdateHandle_t handle, string pchKey)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/steamapi/ugcupdatehandle_t)
- **pchKey**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RemoveItemPreview(UGCUpdateHandle_t, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L586)

<p> remove a preview by index starting at 0 (previews are sorted)</p>

```csharp
public static bool RemoveItemPreview(UGCUpdateHandle_t handle, uint index)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/steamapi/ugcupdatehandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RequestUGCDetails(PublishedFileId_t, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L377)

<p> DEPRECATED - Use CreateQueryUGCDetailsRequest call above instead!</p>

```csharp
public static SteamAPICall_t RequestUGCDetails(PublishedFileId_t nPublishedFileID, uint unMaxAgeSeconds)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)
- **unMaxAgeSeconds**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### SendQueryUGCRequest(UGCQueryHandle_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L50)

<p> Send the query to Steam</p>

```csharp
public static SteamAPICall_t SendQueryUGCRequest(UGCQueryHandle_t handle)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### SetAdminQuery(UGCUpdateHandle_t, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L310)

<p> admin queries return hidden items</p>

```csharp
public static bool SetAdminQuery(UGCUpdateHandle_t handle, bool bAdminQuery)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/steamapi/ugcupdatehandle_t)
- **bAdminQuery**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetAllowCachedResponse(UGCQueryHandle_t, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L301)

```csharp
public static bool SetAllowCachedResponse(UGCQueryHandle_t handle, uint unMaxAgeSeconds)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **unMaxAgeSeconds**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetAllowLegacyUpload(UGCUpdateHandle_t, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L495)

<p>  use legacy upload for a single small file. The parameter to SetItemContent() should either be a directory with one file or the full path to the file.  The file must also be less than 10MB in size.</p>

```csharp
public static bool SetAllowLegacyUpload(UGCUpdateHandle_t handle, bool bAllowLegacyUpload)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/steamapi/ugcupdatehandle_t)
- **bAllowLegacyUpload**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetCloudFileNameFilter(UGCQueryHandle_t, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L319)

<p> Options only for querying user UGC</p>

```csharp
public static bool SetCloudFileNameFilter(UGCQueryHandle_t handle, string pMatchCloudFileName)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **pMatchCloudFileName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetItemContent(UGCUpdateHandle_t, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L471)

<p> update item content from this local folder</p>

```csharp
public static bool SetItemContent(UGCUpdateHandle_t handle, string pszContentFolder)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/steamapi/ugcupdatehandle_t)
- **pszContentFolder**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetItemDescription(UGCUpdateHandle_t, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L417)

<p> change the description of an UGC item</p>

```csharp
public static bool SetItemDescription(UGCUpdateHandle_t handle, string pchDescription)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/steamapi/ugcupdatehandle_t)
- **pchDescription**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetItemMetadata(UGCUpdateHandle_t, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L441)

<p> change the metadata of an UGC item (max = k_cchDeveloperMetadataMax)</p>

```csharp
public static bool SetItemMetadata(UGCUpdateHandle_t handle, string pchMetaData)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/steamapi/ugcupdatehandle_t)
- **pchMetaData**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetItemPreview(UGCUpdateHandle_t, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L483)

<p>  change preview image file for this item. pszPreviewFile points to local image file, which must be under 1MB in size</p>

```csharp
public static bool SetItemPreview(UGCUpdateHandle_t handle, string pszPreviewFile)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/steamapi/ugcupdatehandle_t)
- **pszPreviewFile**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetItemTags(UGCUpdateHandle_t, IList, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L462)

<p> change the tags of an UGC item</p>

```csharp
public static bool SetItemTags(UGCUpdateHandle_t updateHandle, IList<string> pTags, bool bAllowAdminTags = false)
```

#### Parameters

- **updateHandle**: [UGCUpdateHandle_t](/docs/api/steamapi/ugcupdatehandle_t)
- **pTags**: [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>
- **bAllowAdminTags**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetItemTitle(UGCUpdateHandle_t, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L405)

<p> change the title of an UGC item</p>

```csharp
public static bool SetItemTitle(UGCUpdateHandle_t handle, string pchTitle)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/steamapi/ugcupdatehandle_t)
- **pchTitle**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetItemUpdateLanguage(UGCUpdateHandle_t, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L429)

<p> specify the language of the title or description that will be set</p>

```csharp
public static bool SetItemUpdateLanguage(UGCUpdateHandle_t handle, string pchLanguage)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/steamapi/ugcupdatehandle_t)
- **pchLanguage**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetItemVisibility(UGCUpdateHandle_t, ERemoteStoragePublishedFileVisibility)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L453)

<p> change the visibility of an UGC item</p>

```csharp
public static bool SetItemVisibility(UGCUpdateHandle_t handle, ERemoteStoragePublishedFileVisibility eVisibility)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/steamapi/ugcupdatehandle_t)
- **eVisibility**: [ERemoteStoragePublishedFileVisibility](/docs/api/steamapi/eremotestoragepublishedfilevisibility)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetItemsDisabledLocally(out PublishedFileId_t, uint, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L863)

<p> Sets whether the item should be disabled locally or not. This means that it will not be returned in GetSubscribedItems() by default.</p>

```csharp
public static bool SetItemsDisabledLocally(out PublishedFileId_t pvecPublishedFileIDs, uint unNumPublishedFileIDs, bool bDisabledLocally)
```

#### Parameters

- **pvecPublishedFileIDs**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)
- **unNumPublishedFileIDs**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **bDisabledLocally**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetLanguage(UGCQueryHandle_t, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L292)

```csharp
public static bool SetLanguage(UGCQueryHandle_t handle, string pchLanguage)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **pchLanguage**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetMatchAnyTag(UGCQueryHandle_t, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L331)

<p> Options only for querying all UGC</p>

```csharp
public static bool SetMatchAnyTag(UGCQueryHandle_t handle, bool bMatchAnyTag)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **bMatchAnyTag**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetRankedByTrendDays(UGCQueryHandle_t, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L346)

```csharp
public static bool SetRankedByTrendDays(UGCQueryHandle_t handle, uint unDays)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **unDays**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetRequiredGameVersions(UGCUpdateHandle_t, string, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L607)

<p> an empty string for either parameter means that it will match any version on that end of the range. This will only be applied if the actual content has been changed.</p>

```csharp
public static bool SetRequiredGameVersions(UGCUpdateHandle_t handle, string pszGameBranchMin, string pszGameBranchMax)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/steamapi/ugcupdatehandle_t)
- **pszGameBranchMin**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pszGameBranchMax**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetReturnAdditionalPreviews(UGCQueryHandle_t, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L274)

```csharp
public static bool SetReturnAdditionalPreviews(UGCQueryHandle_t handle, bool bReturnAdditionalPreviews)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **bReturnAdditionalPreviews**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetReturnChildren(UGCQueryHandle_t, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L268)

```csharp
public static bool SetReturnChildren(UGCQueryHandle_t handle, bool bReturnChildren)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **bReturnChildren**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetReturnKeyValueTags(UGCQueryHandle_t, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L250)

```csharp
public static bool SetReturnKeyValueTags(UGCQueryHandle_t handle, bool bReturnKeyValueTags)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **bReturnKeyValueTags**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetReturnLongDescription(UGCQueryHandle_t, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L256)

```csharp
public static bool SetReturnLongDescription(UGCQueryHandle_t handle, bool bReturnLongDescription)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **bReturnLongDescription**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetReturnMetadata(UGCQueryHandle_t, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L262)

```csharp
public static bool SetReturnMetadata(UGCQueryHandle_t handle, bool bReturnMetadata)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **bReturnMetadata**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetReturnOnlyIDs(UGCQueryHandle_t, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L244)

```csharp
public static bool SetReturnOnlyIDs(UGCQueryHandle_t handle, bool bReturnOnlyIDs)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **bReturnOnlyIDs**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetReturnPlaytimeStats(UGCQueryHandle_t, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L286)

```csharp
public static bool SetReturnPlaytimeStats(UGCQueryHandle_t handle, uint unDays)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **unDays**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetReturnTotalOnly(UGCQueryHandle_t, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L280)

```csharp
public static bool SetReturnTotalOnly(UGCQueryHandle_t handle, bool bReturnTotalOnly)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **bReturnTotalOnly**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetSearchText(UGCQueryHandle_t, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L337)

```csharp
public static bool SetSearchText(UGCQueryHandle_t handle, string pSearchText)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **pSearchText**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetSubscriptionsLoadOrder(out PublishedFileId_t, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L872)

<p> Set the local load order for these items. If there are any items not in the given list, they will sort by the time subscribed.</p>

```csharp
public static bool SetSubscriptionsLoadOrder(out PublishedFileId_t pvecPublishedFileIDs, uint unNumPublishedFileIDs)
```

#### Parameters

- **pvecPublishedFileIDs**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)
- **unNumPublishedFileIDs**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetTimeCreatedDateRange(UGCQueryHandle_t, uint, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L352)

```csharp
public static bool SetTimeCreatedDateRange(UGCQueryHandle_t handle, uint rtStart, uint rtEnd)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **rtStart**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **rtEnd**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetTimeUpdatedDateRange(UGCQueryHandle_t, uint, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L358)

```csharp
public static bool SetTimeUpdatedDateRange(UGCQueryHandle_t handle, uint rtStart, uint rtEnd)
```

#### Parameters

- **handle**: [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)
- **rtStart**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **rtEnd**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetUserItemVote(PublishedFileId_t, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L638)

<p> Steam Workshop Consumer API</p>

```csharp
public static SteamAPICall_t SetUserItemVote(PublishedFileId_t nPublishedFileID, bool bVoteUp)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)
- **bVoteUp**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### ShowWorkshopEULA()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L836)

<p> Show the app's latest Workshop EULA to the user in an overlay window, where they can accept it or not</p>

```csharp
public static bool ShowWorkshopEULA()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartItemUpdate(AppId_t, PublishedFileId_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L396)

<p> start an UGC item update. Set changed properties before commiting update with CommitItemUpdate()</p>

```csharp
public static UGCUpdateHandle_t StartItemUpdate(AppId_t nConsumerAppId, PublishedFileId_t nPublishedFileID)
```

#### Parameters

- **nConsumerAppId**: [AppId_t](/docs/api/steamapi/appid_t)
- **nPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)

#### Returns

- [UGCUpdateHandle_t](/docs/api/steamapi/ugcupdatehandle_t)

### StartPlaytimeTracking(PublishedFileId_t[], uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L766)

<p> usage tracking</p>

```csharp
public static SteamAPICall_t StartPlaytimeTracking(PublishedFileId_t[] pvecPublishedFileID, uint unNumPublishedFileIDs)
```

#### Parameters

- **pvecPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)[]
- **unNumPublishedFileIDs**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### StopPlaytimeTracking(PublishedFileId_t[], uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L772)

```csharp
public static SteamAPICall_t StopPlaytimeTracking(PublishedFileId_t[] pvecPublishedFileID, uint unNumPublishedFileIDs)
```

#### Parameters

- **pvecPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)[]
- **unNumPublishedFileIDs**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### StopPlaytimeTrackingForAllItems()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L778)

```csharp
public static SteamAPICall_t StopPlaytimeTrackingForAllItems()
```

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### SubmitItemUpdate(UGCUpdateHandle_t, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L620)

<p> commit update process started with StartItemUpdate()</p>

```csharp
public static SteamAPICall_t SubmitItemUpdate(UGCUpdateHandle_t handle, string pchChangeNote)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/steamapi/ugcupdatehandle_t)
- **pchChangeNote**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### SubscribeItem(PublishedFileId_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L665)

<p> subscribe to this item, will be installed ASAP</p>

```csharp
public static SteamAPICall_t SubscribeItem(PublishedFileId_t nPublishedFileID)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### SuspendDownloads(bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L757)

<p> SuspendDownloads( true ) will suspend all workshop downloads until SuspendDownloads( false ) is called or the game ends</p>

```csharp
public static void SuspendDownloads(bool bSuspend)
```

#### Parameters

- **bSuspend**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UnsubscribeItem(PublishedFileId_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L674)

<p> unsubscribe from this item, will be uninstalled after game quits</p>

```csharp
public static SteamAPICall_t UnsubscribeItem(PublishedFileId_t nPublishedFileID)
```

#### Parameters

- **nPublishedFileID**: [PublishedFileId_t](/docs/api/steamapi/publishedfileid_t)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### UpdateItemPreviewFile(UGCUpdateHandle_t, uint, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L562)

<p>  updates an existing preview file for this item. pszPreviewFile points to local file, which must be under 1MB in size</p>

```csharp
public static bool UpdateItemPreviewFile(UGCUpdateHandle_t handle, uint index, string pszPreviewFile)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/steamapi/ugcupdatehandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pszPreviewFile**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UpdateItemPreviewVideo(UGCUpdateHandle_t, uint, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverugc.cs#L574)

<p>  updates an existing preview video for this item</p>

```csharp
public static bool UpdateItemPreviewVideo(UGCUpdateHandle_t handle, uint index, string pszVideoID)
```

#### Parameters

- **handle**: [UGCUpdateHandle_t](/docs/api/steamapi/ugcupdatehandle_t)
- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pszVideoID**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

