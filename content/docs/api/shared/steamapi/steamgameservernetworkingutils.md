---
title: SteamGameServerNetworkingUtils
---

```csharp
public static class SteamGameServerNetworkingUtils
```

#### Inheritance

#### Inherited Members

## Methods

### AllocateMessage(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L24)

```csharp
public static nint AllocateMessage(int cbAllocateBuffer)
```

#### Parameters

- **cbAllocateBuffer**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### CheckPingDataUpToDate(float)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L191)

```csharp
public static bool CheckPingDataUpToDate(float flMaxAgeSeconds)
```

#### Parameters

- **flMaxAgeSeconds**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ConvertPingLocationToString(ref SteamNetworkPingLocation_t, out string, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L152)

```csharp
public static void ConvertPingLocationToString(ref SteamNetworkPingLocation_t location, out string pszBuf, int cchBufSize)
```

#### Parameters

- **location**: [SteamNetworkPingLocation_t](/docs/api/shared/steamapi/steamnetworkpinglocation_t)
- **pszBuf**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchBufSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EstimatePingTimeBetweenTwoLocations(ref SteamNetworkPingLocation_t, ref SteamNetworkPingLocation_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L126)

```csharp
public static int EstimatePingTimeBetweenTwoLocations(ref SteamNetworkPingLocation_t location1, ref SteamNetworkPingLocation_t location2)
```

#### Parameters

- **location1**: [SteamNetworkPingLocation_t](/docs/api/shared/steamapi/steamnetworkpinglocation_t)
- **location2**: [SteamNetworkPingLocation_t](/docs/api/shared/steamapi/steamnetworkpinglocation_t)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EstimatePingTimeFromLocalHost(ref SteamNetworkPingLocation_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L141)

```csharp
public static int EstimatePingTimeFromLocalHost(ref SteamNetworkPingLocation_t remoteLocation)
```

#### Parameters

- **remoteLocation**: [SteamNetworkPingLocation_t](/docs/api/shared/steamapi/steamnetworkpinglocation_t)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetConfigValue(ESteamNetworkingConfigValue, ESteamNetworkingConfigScope, nint, out ESteamNetworkingConfigDataType, nint, ref ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L360)

```csharp
public static ESteamNetworkingGetConfigValueResult GetConfigValue(ESteamNetworkingConfigValue eValue, ESteamNetworkingConfigScope eScopeType, nint scopeObj, out ESteamNetworkingConfigDataType pOutDataType, nint pResult, ref ulong cbResult)
```

#### Parameters

- **eValue**: [ESteamNetworkingConfigValue](/docs/api/shared/steamapi/esteamnetworkingconfigvalue)
- **eScopeType**: [ESteamNetworkingConfigScope](/docs/api/shared/steamapi/esteamnetworkingconfigscope)
- **scopeObj**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **pOutDataType**: [ESteamNetworkingConfigDataType](/docs/api/shared/steamapi/esteamnetworkingconfigdatatype)
- **pResult**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **cbResult**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [ESteamNetworkingGetConfigValueResult](/docs/api/shared/steamapi/esteamnetworkinggetconfigvalueresult)

### GetConfigValueInfo(ESteamNetworkingConfigValue, out ESteamNetworkingConfigDataType, out ESteamNetworkingConfigScope)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L370)

```csharp
public static string GetConfigValueInfo(ESteamNetworkingConfigValue eValue, out ESteamNetworkingConfigDataType pOutDataType, out ESteamNetworkingConfigScope pOutScope)
```

#### Parameters

- **eValue**: [ESteamNetworkingConfigValue](/docs/api/shared/steamapi/esteamnetworkingconfigvalue)
- **pOutDataType**: [ESteamNetworkingConfigDataType](/docs/api/shared/steamapi/esteamnetworkingconfigdatatype)
- **pOutScope**: [ESteamNetworkingConfigScope](/docs/api/shared/steamapi/esteamnetworkingconfigscope)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetDirectPingToPOP(SteamNetworkingPOPID)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L211)

```csharp
public static int GetDirectPingToPOP(SteamNetworkingPOPID popID)
```

#### Parameters

- **popID**: [SteamNetworkingPOPID](/docs/api/shared/steamapi/steamnetworkingpopid)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetIPv4FakeIPType(uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L300)

```csharp
public static ESteamNetworkingFakeIPType GetIPv4FakeIPType(uint nIPv4)
```

#### Parameters

- **nIPv4**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [ESteamNetworkingFakeIPType](/docs/api/shared/steamapi/esteamnetworkingfakeiptype)

### GetLocalPingLocation(out SteamNetworkPingLocation_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L97)

```csharp
public static float GetLocalPingLocation(out SteamNetworkPingLocation_t result)
```

#### Parameters

- **result**: [SteamNetworkPingLocation_t](/docs/api/shared/steamapi/steamnetworkpinglocation_t)

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GetLocalTimestamp()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L253)

```csharp
public static SteamNetworkingMicroseconds GetLocalTimestamp()
```

#### Returns

- [SteamNetworkingMicroseconds](/docs/api/shared/steamapi/steamnetworkingmicroseconds)

### GetPOPCount()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L219)

```csharp
public static int GetPOPCount()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetPOPList(out SteamNetworkingPOPID, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L228)

```csharp
public static int GetPOPList(out SteamNetworkingPOPID list, int nListSz)
```

#### Parameters

- **list**: [SteamNetworkingPOPID](/docs/api/shared/steamapi/steamnetworkingpopid)
- **nListSz**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetPingToDataCenter(SteamNetworkingPOPID, out SteamNetworkingPOPID)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L203)

```csharp
public static int GetPingToDataCenter(SteamNetworkingPOPID popID, out SteamNetworkingPOPID pViaRelayPoP)
```

#### Parameters

- **popID**: [SteamNetworkingPOPID](/docs/api/shared/steamapi/steamnetworkingpopid)
- **pViaRelayPoP**: [SteamNetworkingPOPID](/docs/api/shared/steamapi/steamnetworkingpopid)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetRealIdentityForFakeIP(ref SteamNetworkingIPAddr, out SteamNetworkingIdentity)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L319)

```csharp
public static EResult GetRealIdentityForFakeIP(ref SteamNetworkingIPAddr fakeIP, out SteamNetworkingIdentity pOutRealIdentity)
```

#### Parameters

- **fakeIP**: [SteamNetworkingIPAddr](/docs/api/shared/steamapi/steamnetworkingipaddr)
- **pOutRealIdentity**: [SteamNetworkingIdentity](/docs/api/shared/steamapi/steamnetworkingidentity)

#### Returns

- [EResult](/docs/api/shared/steamapi/eresult)

### GetRelayNetworkStatus(out SteamRelayNetworkStatus_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L68)

```csharp
public static ESteamNetworkingAvailability GetRelayNetworkStatus(out SteamRelayNetworkStatus_t pDetails)
```

#### Parameters

- **pDetails**: [SteamRelayNetworkStatus_t](/docs/api/shared/steamapi/steamrelaynetworkstatus_t)

#### Returns

- [ESteamNetworkingAvailability](/docs/api/shared/steamapi/esteamnetworkingavailability)

### InitRelayNetworkAccess()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L53)

```csharp
public static void InitRelayNetworkAccess()
```

### IsFakeIPv4(uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L295)

```csharp
public static bool IsFakeIPv4(uint nIPv4)
```

#### Parameters

- **nIPv4**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IterateGenericEditableConfigValues(ESteamNetworkingConfigValue, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L385)

```csharp
public static ESteamNetworkingConfigValue IterateGenericEditableConfigValues(ESteamNetworkingConfigValue eCurrent, bool bEnumerateDevVars)
```

#### Parameters

- **eCurrent**: [ESteamNetworkingConfigValue](/docs/api/shared/steamapi/esteamnetworkingconfigvalue)
- **bEnumerateDevVars**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [ESteamNetworkingConfigValue](/docs/api/shared/steamapi/esteamnetworkingconfigvalue)

### ParsePingLocationString(string, out SteamNetworkPingLocation_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L164)

```csharp
public static bool ParsePingLocationString(string pszString, out SteamNetworkPingLocation_t result)
```

#### Parameters

- **pszString**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **result**: [SteamNetworkPingLocation_t](/docs/api/shared/steamapi/steamnetworkpinglocation_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetConfigValue(ESteamNetworkingConfigValue, ESteamNetworkingConfigScope, nint, ESteamNetworkingConfigDataType, nint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L342)

```csharp
public static bool SetConfigValue(ESteamNetworkingConfigValue eValue, ESteamNetworkingConfigScope eScopeType, nint scopeObj, ESteamNetworkingConfigDataType eDataType, nint pArg)
```

#### Parameters

- **eValue**: [ESteamNetworkingConfigValue](/docs/api/shared/steamapi/esteamnetworkingconfigvalue)
- **eScopeType**: [ESteamNetworkingConfigScope](/docs/api/shared/steamapi/esteamnetworkingconfigscope)
- **scopeObj**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **eDataType**: [ESteamNetworkingConfigDataType](/docs/api/shared/steamapi/esteamnetworkingconfigdatatype)
- **pArg**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetDebugOutputFunction(ESteamNetworkingSocketsDebugOutputType, FSteamNetworkingSocketsDebugOutput)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L283)

```csharp
public static void SetDebugOutputFunction(ESteamNetworkingSocketsDebugOutputType eDetailLevel, FSteamNetworkingSocketsDebugOutput pfnFunc)
```

#### Parameters

- **eDetailLevel**: [ESteamNetworkingSocketsDebugOutputType](/docs/api/shared/steamapi/esteamnetworkingsocketsdebugoutputtype)
- **pfnFunc**: [FSteamNetworkingSocketsDebugOutput](/docs/api/shared/steamapi/fsteamnetworkingsocketsdebugoutput)

### SteamNetworkingIPAddr_GetFakeIPType(ref SteamNetworkingIPAddr)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L409)

```csharp
public static ESteamNetworkingFakeIPType SteamNetworkingIPAddr_GetFakeIPType(ref SteamNetworkingIPAddr addr)
```

#### Parameters

- **addr**: [SteamNetworkingIPAddr](/docs/api/shared/steamapi/steamnetworkingipaddr)

#### Returns

- [ESteamNetworkingFakeIPType](/docs/api/shared/steamapi/esteamnetworkingfakeiptype)

### SteamNetworkingIPAddr_ParseString(out SteamNetworkingIPAddr, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L402)

```csharp
public static bool SteamNetworkingIPAddr_ParseString(out SteamNetworkingIPAddr pAddr, string pszStr)
```

#### Parameters

- **pAddr**: [SteamNetworkingIPAddr](/docs/api/shared/steamapi/steamnetworkingipaddr)
- **pszStr**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SteamNetworkingIPAddr_ToString(ref SteamNetworkingIPAddr, out string, uint, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L394)

```csharp
public static void SteamNetworkingIPAddr_ToString(ref SteamNetworkingIPAddr addr, out string buf, uint cbBuf, bool bWithPort)
```

#### Parameters

- **addr**: [SteamNetworkingIPAddr](/docs/api/shared/steamapi/steamnetworkingipaddr)
- **buf**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cbBuf**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **bWithPort**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SteamNetworkingIdentity_ParseString(out SteamNetworkingIdentity, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L422)

```csharp
public static bool SteamNetworkingIdentity_ParseString(out SteamNetworkingIdentity pIdentity, string pszStr)
```

#### Parameters

- **pIdentity**: [SteamNetworkingIdentity](/docs/api/shared/steamapi/steamnetworkingidentity)
- **pszStr**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SteamNetworkingIdentity_ToString(ref SteamNetworkingIdentity, out string, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L414)

```csharp
public static void SteamNetworkingIdentity_ToString(ref SteamNetworkingIdentity identity, out string buf, uint cbBuf)
```

#### Parameters

- **identity**: [SteamNetworkingIdentity](/docs/api/shared/steamapi/steamnetworkingidentity)
- **buf**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cbBuf**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

