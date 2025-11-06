---
title: SteamGameServerInventory
---

```csharp
public static class SteamGameServerInventory
```

#### Inheritance

#### Inherited Members

## Methods

### AddPromoItem(out SteamInventoryResult_t, SteamItemDef_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L187)

```csharp
public static bool AddPromoItem(out SteamInventoryResult_t pResultHandle, SteamItemDef_t itemDef)
```

#### Parameters

- **pResultHandle**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)
- **itemDef**: [SteamItemDef_t](/docs/api/shared/steamapi/steamitemdef_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AddPromoItems(out SteamInventoryResult_t, SteamItemDef_t[], uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L192)

```csharp
public static bool AddPromoItems(out SteamInventoryResult_t pResultHandle, SteamItemDef_t[] pArrayItemDefs, uint unArrayLength)
```

#### Parameters

- **pResultHandle**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)
- **pArrayItemDefs**: [SteamItemDef_t](/docs/api/shared/steamapi/steamitemdef_t)[]
- **unArrayLength**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CheckResultSteamID(SteamInventoryResult_t, CSteamID)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L73)

```csharp
public static bool CheckResultSteamID(SteamInventoryResult_t resultHandle, CSteamID steamIDExpected)
```

#### Parameters

- **resultHandle**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)
- **steamIDExpected**: [CSteamID](/docs/api/shared/steamapi/csteamid)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ConsumeItem(out SteamInventoryResult_t, SteamItemInstanceID_t, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L202)

```csharp
public static bool ConsumeItem(out SteamInventoryResult_t pResultHandle, SteamItemInstanceID_t itemConsume, uint unQuantity)
```

#### Parameters

- **pResultHandle**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)
- **itemConsume**: [SteamItemInstanceID_t](/docs/api/shared/steamapi/steamiteminstanceid_t)
- **unQuantity**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DeserializeResult(out SteamInventoryResult_t, byte[], uint, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L151)

```csharp
public static bool DeserializeResult(out SteamInventoryResult_t pOutResultHandle, byte[] pBuffer, uint unBufferSize, bool bRESERVED_MUST_BE_FALSE = false)
```

#### Parameters

- **pOutResultHandle**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)
- **pBuffer**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **unBufferSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **bRESERVED_MUST_BE_FALSE**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DestroyResult(SteamInventoryResult_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L81)

```csharp
public static void DestroyResult(SteamInventoryResult_t resultHandle)
```

#### Parameters

- **resultHandle**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)

### ExchangeItems(out SteamInventoryResult_t, SteamItemDef_t[], uint[], uint, SteamItemInstanceID_t[], uint[], uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L217)

```csharp
public static bool ExchangeItems(out SteamInventoryResult_t pResultHandle, SteamItemDef_t[] pArrayGenerate, uint[] punArrayGenerateQuantity, uint unArrayGenerateLength, SteamItemInstanceID_t[] pArrayDestroy, uint[] punArrayDestroyQuantity, uint unArrayDestroyLength)
```

#### Parameters

- **pResultHandle**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)
- **pArrayGenerate**: [SteamItemDef_t](/docs/api/shared/steamapi/steamitemdef_t)[]
- **punArrayGenerateQuantity**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)[]
- **unArrayGenerateLength**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pArrayDestroy**: [SteamItemInstanceID_t](/docs/api/shared/steamapi/steamiteminstanceid_t)[]
- **punArrayDestroyQuantity**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)[]
- **unArrayDestroyLength**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GenerateItems(out SteamInventoryResult_t, SteamItemDef_t[], uint[], uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L165)

```csharp
public static bool GenerateItems(out SteamInventoryResult_t pResultHandle, SteamItemDef_t[] pArrayItemDefs, uint[] punArrayQuantity, uint unArrayLength)
```

#### Parameters

- **pResultHandle**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)
- **pArrayItemDefs**: [SteamItemDef_t](/docs/api/shared/steamapi/steamitemdef_t)[]
- **punArrayQuantity**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)[]
- **unArrayLength**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetAllItems(out SteamInventoryResult_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L96)

```csharp
public static bool GetAllItems(out SteamInventoryResult_t pResultHandle)
```

#### Parameters

- **pResultHandle**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetEligiblePromoItemDefinitionIDs(CSteamID, SteamItemDef_t[], ref uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L336)

```csharp
public static bool GetEligiblePromoItemDefinitionIDs(CSteamID steamID, SteamItemDef_t[] pItemDefIDs, ref uint punItemDefIDsArraySize)
```

#### Parameters

- **steamID**: [CSteamID](/docs/api/shared/steamapi/csteamid)
- **pItemDefIDs**: [SteamItemDef_t](/docs/api/shared/steamapi/steamitemdef_t)[]
- **punItemDefIDsArraySize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetItemDefinitionIDs(SteamItemDef_t[], ref uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L291)

```csharp
public static bool GetItemDefinitionIDs(SteamItemDef_t[] pItemDefIDs, ref uint punItemDefIDsArraySize)
```

#### Parameters

- **pItemDefIDs**: [SteamItemDef_t](/docs/api/shared/steamapi/steamitemdef_t)[]
- **punItemDefIDsArraySize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetItemDefinitionProperty(SteamItemDef_t, string, out string, ref uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L310)

```csharp
public static bool GetItemDefinitionProperty(SteamItemDef_t iDefinition, string pchPropertyName, out string pchValueBuffer, ref uint punValueBufferSizeOut)
```

#### Parameters

- **iDefinition**: [SteamItemDef_t](/docs/api/shared/steamapi/steamitemdef_t)
- **pchPropertyName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pchValueBuffer**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **punValueBufferSizeOut**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetItemPrice(SteamItemDef_t, out ulong, out ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L393)

```csharp
public static bool GetItemPrice(SteamItemDef_t iDefinition, out ulong pCurrentPrice, out ulong pBasePrice)
```

#### Parameters

- **iDefinition**: [SteamItemDef_t](/docs/api/shared/steamapi/steamitemdef_t)
- **pCurrentPrice**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)
- **pBasePrice**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetItemsByID(out SteamInventoryResult_t, SteamItemInstanceID_t[], uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L110)

```csharp
public static bool GetItemsByID(out SteamInventoryResult_t pResultHandle, SteamItemInstanceID_t[] pInstanceIDs, uint unCountInstanceIDs)
```

#### Parameters

- **pResultHandle**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)
- **pInstanceIDs**: [SteamItemInstanceID_t](/docs/api/shared/steamapi/steamiteminstanceid_t)[]
- **unCountInstanceIDs**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetItemsWithPrices(SteamItemDef_t[], ulong[], ulong[], uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L375)

```csharp
public static bool GetItemsWithPrices(SteamItemDef_t[] pArrayItemDefs, ulong[] pCurrentPrices, ulong[] pBasePrices, uint unArrayLength)
```

#### Parameters

- **pArrayItemDefs**: [SteamItemDef_t](/docs/api/shared/steamapi/steamitemdef_t)[]
- **pCurrentPrices**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)[]
- **pBasePrices**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)[]
- **unArrayLength**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetNumItemsWithPrices()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L366)

```csharp
public static uint GetNumItemsWithPrices()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetResultItemProperty(SteamInventoryResult_t, uint, string, out string, ref uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L48)

```csharp
public static bool GetResultItemProperty(SteamInventoryResult_t resultHandle, uint unItemIndex, string pchPropertyName, out string pchValueBuffer, ref uint punValueBufferSizeOut)
```

#### Parameters

- **resultHandle**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)
- **unItemIndex**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pchPropertyName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pchValueBuffer**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **punValueBufferSizeOut**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetResultItems(SteamInventoryResult_t, SteamItemDetails_t[], ref uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L29)

```csharp
public static bool GetResultItems(SteamInventoryResult_t resultHandle, SteamItemDetails_t[] pOutItemsArray, ref uint punOutItemsArraySize)
```

#### Parameters

- **resultHandle**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)
- **pOutItemsArray**: [SteamItemDetails_t](/docs/api/shared/steamapi/steamitemdetails_t)[]
- **punOutItemsArraySize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetResultStatus(SteamInventoryResult_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L20)

```csharp
public static EResult GetResultStatus(SteamInventoryResult_t resultHandle)
```

#### Parameters

- **resultHandle**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)

#### Returns

- [EResult](/docs/api/shared/steamapi/eresult)

### GetResultTimestamp(SteamInventoryResult_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L63)

```csharp
public static uint GetResultTimestamp(SteamInventoryResult_t resultHandle)
```

#### Parameters

- **resultHandle**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GrantPromoItems(out SteamInventoryResult_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L176)

```csharp
public static bool GrantPromoItems(out SteamInventoryResult_t pResultHandle)
```

#### Parameters

- **pResultHandle**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InspectItem(out SteamInventoryResult_t, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L456)

```csharp
public static bool InspectItem(out SteamInventoryResult_t pResultHandle, string pchItemToken)
```

#### Parameters

- **pResultHandle**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)
- **pchItemToken**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LoadItemDefinitions()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L279)

```csharp
public static bool LoadItemDefinitions()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RemoveProperty(SteamInventoryUpdateHandle_t, SteamItemInstanceID_t, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L409)

```csharp
public static bool RemoveProperty(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t nItemID, string pchPropertyName)
```

#### Parameters

- **handle**: [SteamInventoryUpdateHandle_t](/docs/api/shared/steamapi/steaminventoryupdatehandle_t)
- **nItemID**: [SteamItemInstanceID_t](/docs/api/shared/steamapi/steamiteminstanceid_t)
- **pchPropertyName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RequestEligiblePromoItemDefinitionsIDs(CSteamID)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L326)

```csharp
public static SteamAPICall_t RequestEligiblePromoItemDefinitionsIDs(CSteamID steamID)
```

#### Parameters

- **steamID**: [CSteamID](/docs/api/shared/steamapi/csteamid)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### RequestPrices()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L358)

```csharp
public static SteamAPICall_t RequestPrices()
```

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### SendItemDropHeartbeat()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L237)

```csharp
public static void SendItemDropHeartbeat()
```

### SerializeResult(SteamInventoryResult_t, byte[], out uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L130)

```csharp
public static bool SerializeResult(SteamInventoryResult_t resultHandle, byte[] pOutBuffer, out uint punOutBufferSize)
```

#### Parameters

- **resultHandle**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)
- **pOutBuffer**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **punOutBufferSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetProperty(SteamInventoryUpdateHandle_t, SteamItemInstanceID_t, string, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L419)

```csharp
public static bool SetProperty(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t nItemID, string pchPropertyName, string pchPropertyValue)
```

#### Parameters

- **handle**: [SteamInventoryUpdateHandle_t](/docs/api/shared/steamapi/steaminventoryupdatehandle_t)
- **nItemID**: [SteamItemInstanceID_t](/docs/api/shared/steamapi/steamiteminstanceid_t)
- **pchPropertyName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pchPropertyValue**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetProperty(SteamInventoryUpdateHandle_t, SteamItemInstanceID_t, string, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L427)

```csharp
public static bool SetProperty(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t nItemID, string pchPropertyName, bool bValue)
```

#### Parameters

- **handle**: [SteamInventoryUpdateHandle_t](/docs/api/shared/steamapi/steaminventoryupdatehandle_t)
- **nItemID**: [SteamItemInstanceID_t](/docs/api/shared/steamapi/steamiteminstanceid_t)
- **pchPropertyName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **bValue**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetProperty(SteamInventoryUpdateHandle_t, SteamItemInstanceID_t, string, long)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L434)

```csharp
public static bool SetProperty(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t nItemID, string pchPropertyName, long nValue)
```

#### Parameters

- **handle**: [SteamInventoryUpdateHandle_t](/docs/api/shared/steamapi/steaminventoryupdatehandle_t)
- **nItemID**: [SteamItemInstanceID_t](/docs/api/shared/steamapi/steamiteminstanceid_t)
- **pchPropertyName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **nValue**: [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetProperty(SteamInventoryUpdateHandle_t, SteamItemInstanceID_t, string, float)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L441)

```csharp
public static bool SetProperty(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t nItemID, string pchPropertyName, float flValue)
```

#### Parameters

- **handle**: [SteamInventoryUpdateHandle_t](/docs/api/shared/steamapi/steaminventoryupdatehandle_t)
- **nItemID**: [SteamItemInstanceID_t](/docs/api/shared/steamapi/steamiteminstanceid_t)
- **pchPropertyName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **flValue**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartPurchase(SteamItemDef_t[], uint[], uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L350)

```csharp
public static SteamAPICall_t StartPurchase(SteamItemDef_t[] pArrayItemDefs, uint[] punArrayQuantity, uint unArrayLength)
```

#### Parameters

- **pArrayItemDefs**: [SteamItemDef_t](/docs/api/shared/steamapi/steamitemdef_t)[]
- **punArrayQuantity**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)[]
- **unArrayLength**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### StartUpdateProperties()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L401)

```csharp
public static SteamInventoryUpdateHandle_t StartUpdateProperties()
```

#### Returns

- [SteamInventoryUpdateHandle_t](/docs/api/shared/steamapi/steaminventoryupdatehandle_t)

### SubmitUpdateProperties(SteamInventoryUpdateHandle_t, out SteamInventoryResult_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L451)

```csharp
public static bool SubmitUpdateProperties(SteamInventoryUpdateHandle_t handle, out SteamInventoryResult_t pResultHandle)
```

#### Parameters

- **handle**: [SteamInventoryUpdateHandle_t](/docs/api/shared/steamapi/steaminventoryupdatehandle_t)
- **pResultHandle**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TradeItems(out SteamInventoryResult_t, CSteamID, SteamItemInstanceID_t[], uint[], uint, SteamItemInstanceID_t[], uint[], uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L261)

```csharp
public static bool TradeItems(out SteamInventoryResult_t pResultHandle, CSteamID steamIDTradePartner, SteamItemInstanceID_t[] pArrayGive, uint[] pArrayGiveQuantity, uint nArrayGiveLength, SteamItemInstanceID_t[] pArrayGet, uint[] pArrayGetQuantity, uint nArrayGetLength)
```

#### Parameters

- **pResultHandle**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)
- **steamIDTradePartner**: [CSteamID](/docs/api/shared/steamapi/csteamid)
- **pArrayGive**: [SteamItemInstanceID_t](/docs/api/shared/steamapi/steamiteminstanceid_t)[]
- **pArrayGiveQuantity**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)[]
- **nArrayGiveLength**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pArrayGet**: [SteamItemInstanceID_t](/docs/api/shared/steamapi/steamiteminstanceid_t)[]
- **pArrayGetQuantity**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)[]
- **nArrayGetLength**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TransferItemQuantity(out SteamInventoryResult_t, SteamItemInstanceID_t, uint, SteamItemInstanceID_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L228)

```csharp
public static bool TransferItemQuantity(out SteamInventoryResult_t pResultHandle, SteamItemInstanceID_t itemIdSource, uint unQuantity, SteamItemInstanceID_t itemIdDest)
```

#### Parameters

- **pResultHandle**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)
- **itemIdSource**: [SteamItemInstanceID_t](/docs/api/shared/steamapi/steamiteminstanceid_t)
- **unQuantity**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **itemIdDest**: [SteamItemInstanceID_t](/docs/api/shared/steamapi/steamiteminstanceid_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TriggerItemDrop(out SteamInventoryResult_t, SteamItemDef_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L253)

```csharp
public static bool TriggerItemDrop(out SteamInventoryResult_t pResultHandle, SteamItemDef_t dropListDefinition)
```

#### Parameters

- **pResultHandle**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)
- **dropListDefinition**: [SteamItemDef_t](/docs/api/shared/steamapi/steamitemdef_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

