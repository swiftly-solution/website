---
title: SteamGameServerInventory
---

# Class SteamGameServerInventory

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L5)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public static class SteamGameServerInventory
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [SteamGameServerInventory](/docs/api/steamapi/steamgameserverinventory)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### AddPromoItem(out SteamInventoryResult_t, SteamItemDef_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L187)

<p> AddPromoItem() / AddPromoItems() are restricted versions of GrantPromoItems(). Instead of</p>
<p> scanning for all eligible promotional items, the check is restricted to a single item</p>
<p> definition or set of item definitions. This can be useful if your game has custom UI for</p>
<p> showing a specific promo item to the user.</p>

```csharp
public static bool AddPromoItem(out SteamInventoryResult_t pResultHandle, SteamItemDef_t itemDef)
```

#### Parameters

- **pResultHandle**: [SteamInventoryResult_t](/docs/api/steamapi/steaminventoryresult_t)
- **itemDef**: [SteamItemDef_t](/docs/api/steamapi/steamitemdef_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AddPromoItems(out SteamInventoryResult_t, SteamItemDef_t[], uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L192)

```csharp
public static bool AddPromoItems(out SteamInventoryResult_t pResultHandle, SteamItemDef_t[] pArrayItemDefs, uint unArrayLength)
```

#### Parameters

- **pResultHandle**: [SteamInventoryResult_t](/docs/api/steamapi/steaminventoryresult_t)
- **pArrayItemDefs**: [SteamItemDef_t](/docs/api/steamapi/steamitemdef_t)[]
- **unArrayLength**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CheckResultSteamID(SteamInventoryResult_t, CSteamID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L73)

<p> Returns true if the result belongs to the target steam ID, false if the</p>
<p> result does not. This is important when using DeserializeResult, to verify</p>
<p> that a remote player is not pretending to have a different user's inventory.</p>

```csharp
public static bool CheckResultSteamID(SteamInventoryResult_t resultHandle, CSteamID steamIDExpected)
```

#### Parameters

- **resultHandle**: [SteamInventoryResult_t](/docs/api/steamapi/steaminventoryresult_t)
- **steamIDExpected**: [CSteamID](/docs/api/steamapi/csteamid)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ConsumeItem(out SteamInventoryResult_t, SteamItemInstanceID_t, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L202)

<p> ConsumeItem() removes items from the inventory, permanently. They cannot be recovered.</p>
<p> Not for the faint of heart - if your game implements item removal at all, a high-friction</p>
<p> UI confirmation process is highly recommended.</p>

```csharp
public static bool ConsumeItem(out SteamInventoryResult_t pResultHandle, SteamItemInstanceID_t itemConsume, uint unQuantity)
```

#### Parameters

- **pResultHandle**: [SteamInventoryResult_t](/docs/api/steamapi/steaminventoryresult_t)
- **itemConsume**: [SteamItemInstanceID_t](/docs/api/steamapi/steamiteminstanceid_t)
- **unQuantity**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DeserializeResult(out SteamInventoryResult_t, byte[], uint, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L151)

<p> Deserializes a result set and verifies the signature bytes. Returns false</p>
<p> if bRequireFullOnlineVerify is set but Steam is running in Offline mode.</p>
<p> Otherwise returns true and then delivers error codes via GetResultStatus.</p>
<p> The bRESERVED_MUST_BE_FALSE flag is reserved for future use and should not</p>
<p> be set to true by your game at this time.</p>
<p> DeserializeResult has a potential soft-failure mode where the handle status</p>
<p> is set to k_EResultExpired. GetResultItems() still succeeds in this mode.</p>
<p> The "expired" result could indicate that the data may be out of date - not</p>
<p> just due to timed expiration (one hour), but also because one of the items</p>
<p> in the result set may have been traded or consumed since the result set was</p>
<p> generated. You could compare the timestamp from GetResultTimestamp() to</p>
<p> ISteamUtils::GetServerRealTime() to determine how old the data is. You could</p>
<p> simply ignore the "expired" result code and continue as normal, or you</p>
<p> could challenge the player with expired data to send an updated result set.</p>

```csharp
public static bool DeserializeResult(out SteamInventoryResult_t pOutResultHandle, byte[] pBuffer, uint unBufferSize, bool bRESERVED_MUST_BE_FALSE = false)
```

#### Parameters

- **pOutResultHandle**: [SteamInventoryResult_t](/docs/api/steamapi/steaminventoryresult_t)
- **pBuffer**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **unBufferSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **bRESERVED_MUST_BE_FALSE**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DestroyResult(SteamInventoryResult_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L81)

<p> Destroys a result handle and frees all associated memory.</p>

```csharp
public static void DestroyResult(SteamInventoryResult_t resultHandle)
```

#### Parameters

- **resultHandle**: [SteamInventoryResult_t](/docs/api/steamapi/steaminventoryresult_t)

### ExchangeItems(out SteamInventoryResult_t, SteamItemDef_t[], uint[], uint, SteamItemInstanceID_t[], uint[], uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L217)

<p> ExchangeItems() is an atomic combination of item generation and consumption.</p>
<p> It can be used to implement crafting recipes or transmutations, or items which unpack</p>
<p> themselves into other items (e.g., a chest).</p>
<p> Exchange recipes are defined in the ItemDef, and explicitly list the required item</p>
<p> types and resulting generated type.</p>
<p> Exchange recipes are evaluated atomically by the Inventory Service; if the supplied</p>
<p> components do not match the recipe, or do not contain sufficient quantity, the</p>
<p> exchange will fail.</p>

```csharp
public static bool ExchangeItems(out SteamInventoryResult_t pResultHandle, SteamItemDef_t[] pArrayGenerate, uint[] punArrayGenerateQuantity, uint unArrayGenerateLength, SteamItemInstanceID_t[] pArrayDestroy, uint[] punArrayDestroyQuantity, uint unArrayDestroyLength)
```

#### Parameters

- **pResultHandle**: [SteamInventoryResult_t](/docs/api/steamapi/steaminventoryresult_t)
- **pArrayGenerate**: [SteamItemDef_t](/docs/api/steamapi/steamitemdef_t)[]
- **punArrayGenerateQuantity**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)[]
- **unArrayGenerateLength**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pArrayDestroy**: [SteamItemInstanceID_t](/docs/api/steamapi/steamiteminstanceid_t)[]
- **punArrayDestroyQuantity**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)[]
- **unArrayDestroyLength**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GenerateItems(out SteamInventoryResult_t, SteamItemDef_t[], uint[], uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L165)

<p> INVENTORY ASYNC MODIFICATION</p>
<p> GenerateItems() creates one or more items and then generates a SteamInventoryCallback_t</p>
<p> notification with a matching nCallbackContext parameter. This API is only intended</p>
<p> for prototyping - it is only usable by Steam accounts that belong to the publisher group</p>
<p> for your game.</p>
<p> If punArrayQuantity is not NULL, it should be the same length as pArrayItems and should</p>
<p> describe the quantity of each item to generate.</p>

```csharp
public static bool GenerateItems(out SteamInventoryResult_t pResultHandle, SteamItemDef_t[] pArrayItemDefs, uint[] punArrayQuantity, uint unArrayLength)
```

#### Parameters

- **pResultHandle**: [SteamInventoryResult_t](/docs/api/steamapi/steaminventoryresult_t)
- **pArrayItemDefs**: [SteamItemDef_t](/docs/api/steamapi/steamitemdef_t)[]
- **punArrayQuantity**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)[]
- **unArrayLength**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetAllItems(out SteamInventoryResult_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L96)

<p> INVENTORY ASYNC QUERY</p>
<p> Captures the entire state of the current user's Steam inventory.</p>
<p> You must call DestroyResult on this handle when you are done with it.</p>
<p> Returns false and sets *pResultHandle to zero if inventory is unavailable.</p>
<p> Note: calls to this function are subject to rate limits and may return</p>
<p> cached results if called too frequently. It is suggested that you call</p>
<p> this function only when you are about to display the user's full inventory,</p>
<p> or if you expect that the inventory may have changed.</p>

```csharp
public static bool GetAllItems(out SteamInventoryResult_t pResultHandle)
```

#### Parameters

- **pResultHandle**: [SteamInventoryResult_t](/docs/api/steamapi/steaminventoryresult_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetEligiblePromoItemDefinitionIDs(CSteamID, SteamItemDef_t[], ref uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L336)

<p> After handling a SteamInventoryEligiblePromoItemDefIDs_t call result, use this</p>
<p> function to pull out the list of item definition ids that the user can be</p>
<p> manually granted via the AddPromoItems() call.</p>

```csharp
public static bool GetEligiblePromoItemDefinitionIDs(CSteamID steamID, SteamItemDef_t[] pItemDefIDs, ref uint punItemDefIDsArraySize)
```

#### Parameters

- **steamID**: [CSteamID](/docs/api/steamapi/csteamid)
- **pItemDefIDs**: [SteamItemDef_t](/docs/api/steamapi/steamitemdef_t)[]
- **punItemDefIDsArraySize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetItemDefinitionIDs(SteamItemDef_t[], ref uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L291)

<p> GetItemDefinitionIDs returns the set of all defined item definition IDs (which are</p>
<p> defined via Steamworks configuration, and not necessarily contiguous integers).</p>
<p> If pItemDefIDs is null, the call will return true and *punItemDefIDsArraySize will</p>
<p> contain the total size necessary for a subsequent call. Otherwise, the call will</p>
<p> return false if and only if there is not enough space in the output array.</p>

```csharp
public static bool GetItemDefinitionIDs(SteamItemDef_t[] pItemDefIDs, ref uint punItemDefIDsArraySize)
```

#### Parameters

- **pItemDefIDs**: [SteamItemDef_t](/docs/api/steamapi/steamitemdef_t)[]
- **punItemDefIDsArraySize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetItemDefinitionProperty(SteamItemDef_t, string, out string, ref uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L310)

<p> GetItemDefinitionProperty returns a string property from a given item definition.</p>
<p> Note that some properties (for example, "name") may be localized and will depend</p>
<p> on the current Steam language settings (see ISteamApps::GetCurrentGameLanguage).</p>
<p> Property names are always composed of ASCII letters, numbers, and/or underscores.</p>
<p> Pass a NULL pointer for pchPropertyName to get a comma - separated list of available</p>
<p> property names. If pchValueBuffer is NULL, *punValueBufferSize will contain the</p>
<p> suggested buffer size. Otherwise it will be the number of bytes actually copied</p>
<p> to pchValueBuffer. If the results do not fit in the given buffer, partial</p>
<p> results may be copied.</p>

```csharp
public static bool GetItemDefinitionProperty(SteamItemDef_t iDefinition, string pchPropertyName, out string pchValueBuffer, ref uint punValueBufferSizeOut)
```

#### Parameters

- **iDefinition**: [SteamItemDef_t](/docs/api/steamapi/steamitemdef_t)
- **pchPropertyName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pchValueBuffer**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **punValueBufferSizeOut**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetItemPrice(SteamItemDef_t, out ulong, out ulong)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L393)

<p> Retrieves the price for the item definition id</p>
<p> Returns false if there is no price stored for the item definition.</p>

```csharp
public static bool GetItemPrice(SteamItemDef_t iDefinition, out ulong pCurrentPrice, out ulong pBasePrice)
```

#### Parameters

- **iDefinition**: [SteamItemDef_t](/docs/api/steamapi/steamitemdef_t)
- **pCurrentPrice**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)
- **pBasePrice**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetItemsByID(out SteamInventoryResult_t, SteamItemInstanceID_t[], uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L110)

<p> Captures the state of a subset of the current user's Steam inventory,</p>
<p> identified by an array of item instance IDs. The results from this call</p>
<p> can be serialized and passed to other players to "prove" that the current</p>
<p> user owns specific items, without exposing the user's entire inventory.</p>
<p> For example, you could call GetItemsByID with the IDs of the user's</p>
<p> currently equipped cosmetic items and serialize this to a buffer, and</p>
<p> then transmit this buffer to other players upon joining a game.</p>

```csharp
public static bool GetItemsByID(out SteamInventoryResult_t pResultHandle, SteamItemInstanceID_t[] pInstanceIDs, uint unCountInstanceIDs)
```

#### Parameters

- **pResultHandle**: [SteamInventoryResult_t](/docs/api/steamapi/steaminventoryresult_t)
- **pInstanceIDs**: [SteamItemInstanceID_t](/docs/api/steamapi/steamiteminstanceid_t)[]
- **unCountInstanceIDs**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetItemsWithPrices(SteamItemDef_t[], ulong[], ulong[], uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L375)

<p> Returns item definition ids and their prices in the user's local currency.</p>
<p> Need to call RequestPrices() first.</p>

```csharp
public static bool GetItemsWithPrices(SteamItemDef_t[] pArrayItemDefs, ulong[] pCurrentPrices, ulong[] pBasePrices, uint unArrayLength)
```

#### Parameters

- **pArrayItemDefs**: [SteamItemDef_t](/docs/api/steamapi/steamitemdef_t)[]
- **pCurrentPrices**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)[]
- **pBasePrices**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)[]
- **unArrayLength**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetNumItemsWithPrices()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L366)

<p> Returns the number of items with prices.  Need to call RequestPrices() first.</p>

```csharp
public static uint GetNumItemsWithPrices()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetResultItemProperty(SteamInventoryResult_t, uint, string, out string, ref uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L48)

<p> In combination with GetResultItems, you can use GetResultItemProperty to retrieve</p>
<p> dynamic string properties for a given item returned in the result set.</p>
<p> Property names are always composed of ASCII letters, numbers, and/or underscores.</p>
<p> Pass a NULL pointer for pchPropertyName to get a comma - separated list of available</p>
<p> property names.</p>
<p> If pchValueBuffer is NULL, *punValueBufferSize will contain the</p>
<p> suggested buffer size. Otherwise it will be the number of bytes actually copied</p>
<p> to pchValueBuffer. If the results do not fit in the given buffer, partial</p>
<p> results may be copied.</p>

```csharp
public static bool GetResultItemProperty(SteamInventoryResult_t resultHandle, uint unItemIndex, string pchPropertyName, out string pchValueBuffer, ref uint punValueBufferSizeOut)
```

#### Parameters

- **resultHandle**: [SteamInventoryResult_t](/docs/api/steamapi/steaminventoryresult_t)
- **unItemIndex**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pchPropertyName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pchValueBuffer**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **punValueBufferSizeOut**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetResultItems(SteamInventoryResult_t, SteamItemDetails_t[], ref uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L29)

<p> Copies the contents of a result set into a flat array. The specific</p>
<p> contents of the result set depend on which query which was used.</p>

```csharp
public static bool GetResultItems(SteamInventoryResult_t resultHandle, SteamItemDetails_t[] pOutItemsArray, ref uint punOutItemsArraySize)
```

#### Parameters

- **resultHandle**: [SteamInventoryResult_t](/docs/api/steamapi/steaminventoryresult_t)
- **pOutItemsArray**: [SteamItemDetails_t](/docs/api/steamapi/steamitemdetails_t)[]
- **punOutItemsArraySize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetResultStatus(SteamInventoryResult_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L20)

<p> INVENTORY ASYNC RESULT MANAGEMENT</p>
<p> Asynchronous inventory queries always output a result handle which can be used with</p>
<p> GetResultStatus, GetResultItems, etc. A SteamInventoryResultReady_t callback will</p>
<p> be triggered when the asynchronous result becomes ready (or fails).</p>
<p> Find out the status of an asynchronous inventory result handle. Possible values:</p>
<p>  k_EResultPending - still in progress</p>
<p>  k_EResultOK - done, result ready</p>
<p>  k_EResultExpired - done, result ready, maybe out of date (see DeserializeResult)</p>
<p>  k_EResultInvalidParam - ERROR: invalid API call parameters</p>
<p>  k_EResultServiceUnavailable - ERROR: service temporarily down, you may retry later</p>
<p>  k_EResultLimitExceeded - ERROR: operation would exceed per-user inventory limits</p>
<p>  k_EResultFail - ERROR: unknown / generic error</p>

```csharp
public static EResult GetResultStatus(SteamInventoryResult_t resultHandle)
```

#### Parameters

- **resultHandle**: [SteamInventoryResult_t](/docs/api/steamapi/steaminventoryresult_t)

#### Returns

- [EResult](/docs/api/steamapi/eresult)

### GetResultTimestamp(SteamInventoryResult_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L63)

<p> Returns the server time at which the result was generated. Compare against</p>
<p> the value of IClientUtils::GetServerRealTime() to determine age.</p>

```csharp
public static uint GetResultTimestamp(SteamInventoryResult_t resultHandle)
```

#### Parameters

- **resultHandle**: [SteamInventoryResult_t](/docs/api/steamapi/steaminventoryresult_t)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GrantPromoItems(out SteamInventoryResult_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L176)

<p> GrantPromoItems() checks the list of promotional items for which the user may be eligible</p>
<p> and grants the items (one time only).  On success, the result set will include items which</p>
<p> were granted, if any. If no items were granted because the user isn't eligible for any</p>
<p> promotions, this is still considered a success.</p>

```csharp
public static bool GrantPromoItems(out SteamInventoryResult_t pResultHandle)
```

#### Parameters

- **pResultHandle**: [SteamInventoryResult_t](/docs/api/steamapi/steaminventoryresult_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InspectItem(out SteamInventoryResult_t, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L456)

```csharp
public static bool InspectItem(out SteamInventoryResult_t pResultHandle, string pchItemToken)
```

#### Parameters

- **pResultHandle**: [SteamInventoryResult_t](/docs/api/steamapi/steaminventoryresult_t)
- **pchItemToken**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LoadItemDefinitions()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L279)

<p> ITEM DEFINITIONS</p>
<p> Item definitions are a mapping of "definition IDs" (integers between 1 and 1000000)</p>
<p> to a set of string properties. Some of these properties are required to display items</p>
<p> on the Steam community web site. Other properties can be defined by applications.</p>
<p> Use of these functions is optional; there is no reason to call LoadItemDefinitions</p>
<p> if your game hardcodes the numeric definition IDs (eg, purple face mask = 20, blue</p>
<p> weapon mod = 55) and does not allow for adding new item types without a client patch.</p>
<p> LoadItemDefinitions triggers the automatic load and refresh of item definitions.</p>
<p> Every time new item definitions are available (eg, from the dynamic addition of new</p>
<p> item types while players are still in-game), a SteamInventoryDefinitionUpdate_t</p>
<p> callback will be fired.</p>

```csharp
public static bool LoadItemDefinitions()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RemoveProperty(SteamInventoryUpdateHandle_t, SteamItemInstanceID_t, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L409)

<p> Remove the property on the item</p>

```csharp
public static bool RemoveProperty(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t nItemID, string pchPropertyName)
```

#### Parameters

- **handle**: [SteamInventoryUpdateHandle_t](/docs/api/steamapi/steaminventoryupdatehandle_t)
- **nItemID**: [SteamItemInstanceID_t](/docs/api/steamapi/steamiteminstanceid_t)
- **pchPropertyName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RequestEligiblePromoItemDefinitionsIDs(CSteamID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L326)

<p> Request the list of "eligible" promo items that can be manually granted to the given</p>
<p> user.  These are promo items of type "manual" that won't be granted automatically.</p>
<p> An example usage of this is an item that becomes available every week.</p>

```csharp
public static SteamAPICall_t RequestEligiblePromoItemDefinitionsIDs(CSteamID steamID)
```

#### Parameters

- **steamID**: [CSteamID](/docs/api/steamapi/csteamid)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### RequestPrices()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L358)

<p> Request current prices for all applicable item definitions</p>

```csharp
public static SteamAPICall_t RequestPrices()
```

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### SendItemDropHeartbeat()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L237)

<p> TIMED DROPS AND PLAYTIME CREDIT</p>
<p> Deprecated. Calling this method is not required for proper playtime accounting.</p>

```csharp
public static void SendItemDropHeartbeat()
```

### SerializeResult(SteamInventoryResult_t, byte[], out uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L130)

<p> RESULT SERIALIZATION AND AUTHENTICATION</p>
<p> Serialized result sets contain a short signature which can't be forged</p>
<p> or replayed across different game sessions. A result set can be serialized</p>
<p> on the local client, transmitted to other players via your game networking,</p>
<p> and deserialized by the remote players. This is a secure way of preventing</p>
<p> hackers from lying about posessing rare/high-value items.</p>
<p> Serializes a result set with signature bytes to an output buffer. Pass</p>
<p> NULL as an output buffer to get the required size via punOutBufferSize.</p>
<p> The size of a serialized result depends on the number items which are being</p>
<p> serialized. When securely transmitting items to other players, it is</p>
<p> recommended to use "GetItemsByID" first to create a minimal result set.</p>
<p> Results have a built-in timestamp which will be considered "expired" after</p>
<p> an hour has elapsed. See DeserializeResult for expiration handling.</p>

```csharp
public static bool SerializeResult(SteamInventoryResult_t resultHandle, byte[] pOutBuffer, out uint punOutBufferSize)
```

#### Parameters

- **resultHandle**: [SteamInventoryResult_t](/docs/api/steamapi/steaminventoryresult_t)
- **pOutBuffer**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **punOutBufferSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetProperty(SteamInventoryUpdateHandle_t, SteamItemInstanceID_t, string, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L419)

<p> Accessor methods to set properties on items</p>

```csharp
public static bool SetProperty(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t nItemID, string pchPropertyName, string pchPropertyValue)
```

#### Parameters

- **handle**: [SteamInventoryUpdateHandle_t](/docs/api/steamapi/steaminventoryupdatehandle_t)
- **nItemID**: [SteamItemInstanceID_t](/docs/api/steamapi/steamiteminstanceid_t)
- **pchPropertyName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pchPropertyValue**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetProperty(SteamInventoryUpdateHandle_t, SteamItemInstanceID_t, string, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L427)

```csharp
public static bool SetProperty(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t nItemID, string pchPropertyName, bool bValue)
```

#### Parameters

- **handle**: [SteamInventoryUpdateHandle_t](/docs/api/steamapi/steaminventoryupdatehandle_t)
- **nItemID**: [SteamItemInstanceID_t](/docs/api/steamapi/steamiteminstanceid_t)
- **pchPropertyName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **bValue**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetProperty(SteamInventoryUpdateHandle_t, SteamItemInstanceID_t, string, long)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L434)

```csharp
public static bool SetProperty(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t nItemID, string pchPropertyName, long nValue)
```

#### Parameters

- **handle**: [SteamInventoryUpdateHandle_t](/docs/api/steamapi/steaminventoryupdatehandle_t)
- **nItemID**: [SteamItemInstanceID_t](/docs/api/steamapi/steamiteminstanceid_t)
- **pchPropertyName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **nValue**: [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetProperty(SteamInventoryUpdateHandle_t, SteamItemInstanceID_t, string, float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L441)

```csharp
public static bool SetProperty(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t nItemID, string pchPropertyName, float flValue)
```

#### Parameters

- **handle**: [SteamInventoryUpdateHandle_t](/docs/api/steamapi/steaminventoryupdatehandle_t)
- **nItemID**: [SteamItemInstanceID_t](/docs/api/steamapi/steamiteminstanceid_t)
- **pchPropertyName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **flValue**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartPurchase(SteamItemDef_t[], uint[], uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L350)

<p> Starts the purchase process for the given item definitions.  The callback SteamInventoryStartPurchaseResult_t</p>
<p> will be posted if Steam was able to initialize the transaction.</p>
<p> Once the purchase has been authorized and completed by the user, the callback SteamInventoryResultReady_t</p>
<p> will be posted.</p>

```csharp
public static SteamAPICall_t StartPurchase(SteamItemDef_t[] pArrayItemDefs, uint[] punArrayQuantity, uint unArrayLength)
```

#### Parameters

- **pArrayItemDefs**: [SteamItemDef_t](/docs/api/steamapi/steamitemdef_t)[]
- **punArrayQuantity**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)[]
- **unArrayLength**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### StartUpdateProperties()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L401)

<p> Create a request to update properties on items</p>

```csharp
public static SteamInventoryUpdateHandle_t StartUpdateProperties()
```

#### Returns

- [SteamInventoryUpdateHandle_t](/docs/api/steamapi/steaminventoryupdatehandle_t)

### SubmitUpdateProperties(SteamInventoryUpdateHandle_t, out SteamInventoryResult_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L451)

<p> Submit the update request by handle</p>

```csharp
public static bool SubmitUpdateProperties(SteamInventoryUpdateHandle_t handle, out SteamInventoryResult_t pResultHandle)
```

#### Parameters

- **handle**: [SteamInventoryUpdateHandle_t](/docs/api/steamapi/steaminventoryupdatehandle_t)
- **pResultHandle**: [SteamInventoryResult_t](/docs/api/steamapi/steaminventoryresult_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TradeItems(out SteamInventoryResult_t, CSteamID, SteamItemInstanceID_t[], uint[], uint, SteamItemInstanceID_t[], uint[], uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L261)

<p> Deprecated. This method is not supported.</p>

```csharp
public static bool TradeItems(out SteamInventoryResult_t pResultHandle, CSteamID steamIDTradePartner, SteamItemInstanceID_t[] pArrayGive, uint[] pArrayGiveQuantity, uint nArrayGiveLength, SteamItemInstanceID_t[] pArrayGet, uint[] pArrayGetQuantity, uint nArrayGetLength)
```

#### Parameters

- **pResultHandle**: [SteamInventoryResult_t](/docs/api/steamapi/steaminventoryresult_t)
- **steamIDTradePartner**: [CSteamID](/docs/api/steamapi/csteamid)
- **pArrayGive**: [SteamItemInstanceID_t](/docs/api/steamapi/steamiteminstanceid_t)[]
- **pArrayGiveQuantity**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)[]
- **nArrayGiveLength**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pArrayGet**: [SteamItemInstanceID_t](/docs/api/steamapi/steamiteminstanceid_t)[]
- **pArrayGetQuantity**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)[]
- **nArrayGetLength**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TransferItemQuantity(out SteamInventoryResult_t, SteamItemInstanceID_t, uint, SteamItemInstanceID_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L228)

<p> TransferItemQuantity() is intended for use with items which are "stackable" (can have</p>
<p> quantity greater than one). It can be used to split a stack into two, or to transfer</p>
<p> quantity from one stack into another stack of identical items. To split one stack into</p>
<p> two, pass k_SteamItemInstanceIDInvalid for itemIdDest and a new item will be generated.</p>

```csharp
public static bool TransferItemQuantity(out SteamInventoryResult_t pResultHandle, SteamItemInstanceID_t itemIdSource, uint unQuantity, SteamItemInstanceID_t itemIdDest)
```

#### Parameters

- **pResultHandle**: [SteamInventoryResult_t](/docs/api/steamapi/steaminventoryresult_t)
- **itemIdSource**: [SteamItemInstanceID_t](/docs/api/steamapi/steamiteminstanceid_t)
- **unQuantity**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **itemIdDest**: [SteamItemInstanceID_t](/docs/api/steamapi/steamiteminstanceid_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TriggerItemDrop(out SteamInventoryResult_t, SteamItemDef_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverinventory.cs#L253)

<p> Playtime credit must be consumed and turned into item drops by your game. Only item</p>
<p> definitions which are marked as "playtime item generators" can be spawned. The call</p>
<p> will return an empty result set if there is not enough playtime credit for a drop.</p>
<p> Your game should call TriggerItemDrop at an appropriate time for the user to receive</p>
<p> new items, such as between rounds or while the player is dead. Note that players who</p>
<p> hack their clients could modify the value of "dropListDefinition", so do not use it</p>
<p> to directly control rarity.</p>
<p> See your Steamworks configuration to set playtime drop rates for individual itemdefs.</p>
<p> The client library will suppress too-frequent calls to this method.</p>

```csharp
public static bool TriggerItemDrop(out SteamInventoryResult_t pResultHandle, SteamItemDef_t dropListDefinition)
```

#### Parameters

- **pResultHandle**: [SteamInventoryResult_t](/docs/api/steamapi/steaminventoryresult_t)
- **dropListDefinition**: [SteamItemDef_t](/docs/api/steamapi/steamitemdef_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

