---
title: SteamGameServerNetworkingUtils
---

# Class SteamGameServerNetworkingUtils

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L6)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public static class SteamGameServerNetworkingUtils
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [SteamGameServerNetworkingUtils](/docs/api/steamapi/steamgameservernetworkingutils)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### AllocateMessage(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L24)

<p> Efficient message sending</p>
<p>/ Allocate and initialize a message object.  Usually the reason</p>
<p>/ you call this is to pass it to ISteamNetworkingSockets::SendMessages.</p>
<p>/ The returned object will have all of the relevant fields cleared to zero.</p>
<p>/</p>
<p>/ Optionally you can also request that this system allocate space to</p>
<p>/ hold the payload itself.  If cbAllocateBuffer is nonzero, the system</p>
<p>/ will allocate memory to hold a payload of at least cbAllocateBuffer bytes.</p>
<p>/ m_pData will point to the allocated buffer, m_cbSize will be set to the</p>
<p>/ size, and m_pfnFreeData will be set to the proper function to free up</p>
<p>/ the buffer.</p>
<p>/</p>
<p>/ If cbAllocateBuffer=0, then no buffer is allocated.  m_pData will be NULL,</p>
<p>/ m_cbSize will be zero, and m_pfnFreeData will be NULL.  You will need to</p>
<p>/ set each of these.</p>

```csharp
public static nint AllocateMessage(int cbAllocateBuffer)
```

#### Parameters

- **cbAllocateBuffer**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### CheckPingDataUpToDate(float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L191)

<p>/ Check if the ping data of sufficient recency is available, and if</p>
<p>/ it's too old, start refreshing it.</p>
<p>/</p>
<p>/ Please only call this function when you *really* do need to force an</p>
<p>/ immediate refresh of the data.  (For example, in response to a specific</p>
<p>/ user input to refresh this information.)  Don't call it "just in case",</p>
<p>/ before every connection, etc.  That will cause extra traffic to be sent</p>
<p>/ for no benefit. The library will automatically refresh the information</p>
<p>/ as needed.</p>
<p>/</p>
<p>/ Returns true if sufficiently recent data is already available.</p>
<p>/</p>
<p>/ Returns false if sufficiently recent data is not available.  In this</p>
<p>/ case, ping measurement is initiated, if it is not already active.</p>
<p>/ (You cannot restart a measurement already in progress.)</p>
<p>/</p>
<p>/ You can use GetRelayNetworkStatus or listen for SteamRelayNetworkStatus_t</p>
<p>/ to know when ping measurement completes.</p>

```csharp
public static bool CheckPingDataUpToDate(float flMaxAgeSeconds)
```

#### Parameters

- **flMaxAgeSeconds**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ConvertPingLocationToString(ref SteamNetworkPingLocation_t, out string, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L152)

<p>/ Convert a ping location into a text format suitable for sending over the wire.</p>
<p>/ The format is a compact and human readable.  However, it is subject to change</p>
<p>/ so please do not parse it yourself.  Your buffer must be at least</p>
<p>/ k_cchMaxSteamNetworkingPingLocationString bytes.</p>

```csharp
public static void ConvertPingLocationToString(ref SteamNetworkPingLocation_t location, out string pszBuf, int cchBufSize)
```

#### Parameters

- **location**: [SteamNetworkPingLocation_t](/docs/api/steamapi/steamnetworkpinglocation_t)
- **pszBuf**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cchBufSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EstimatePingTimeBetweenTwoLocations(ref SteamNetworkPingLocation_t, ref SteamNetworkPingLocation_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L126)

<p>/ Estimate the round-trip latency between two arbitrary locations, in</p>
<p>/ milliseconds.  This is a conservative estimate, based on routing through</p>
<p>/ the relay network.  For most basic relayed connections, this ping time</p>
<p>/ will be pretty accurate, since it will be based on the route likely to</p>
<p>/ be actually used.</p>
<p>/</p>
<p>/ If a direct IP route is used (perhaps via NAT traversal), then the route</p>
<p>/ will be different, and the ping time might be better.  Or it might actually</p>
<p>/ be a bit worse!  Standard IP routing is frequently suboptimal!</p>
<p>/</p>
<p>/ But even in this case, the estimate obtained using this method is a</p>
<p>/ reasonable upper bound on the ping time.  (Also it has the advantage</p>
<p>/ of returning immediately and not sending any packets.)</p>
<p>/</p>
<p>/ In a few cases we might not able to estimate the route.  In this case</p>
<p>/ a negative value is returned.  k_nSteamNetworkingPing_Failed means</p>
<p>/ the reason was because of some networking difficulty.  (Failure to</p>
<p>/ ping, etc)  k_nSteamNetworkingPing_Unknown is returned if we cannot</p>
<p>/ currently answer the question for some other reason.</p>
<p>/</p>
<p>/ Do you need to be able to do this from a backend/matchmaking server?</p>
<p>/ You are looking for the "game coordinator" library.</p>

```csharp
public static int EstimatePingTimeBetweenTwoLocations(ref SteamNetworkPingLocation_t location1, ref SteamNetworkPingLocation_t location2)
```

#### Parameters

- **location1**: [SteamNetworkPingLocation_t](/docs/api/steamapi/steamnetworkpinglocation_t)
- **location2**: [SteamNetworkPingLocation_t](/docs/api/steamapi/steamnetworkpinglocation_t)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EstimatePingTimeFromLocalHost(ref SteamNetworkPingLocation_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L141)

<p>/ Same as EstimatePingTime, but assumes that one location is the local host.</p>
<p>/ This is a bit faster, especially if you need to calculate a bunch of</p>
<p>/ these in a loop to find the fastest one.</p>
<p>/</p>
<p>/ In rare cases this might return a slightly different estimate than combining</p>
<p>/ GetLocalPingLocation with EstimatePingTimeBetweenTwoLocations.  That's because</p>
<p>/ this function uses a slightly more complete set of information about what</p>
<p>/ route would be taken.</p>

```csharp
public static int EstimatePingTimeFromLocalHost(ref SteamNetworkPingLocation_t remoteLocation)
```

#### Parameters

- **remoteLocation**: [SteamNetworkPingLocation_t](/docs/api/steamapi/steamnetworkpinglocation_t)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetConfigValue(ESteamNetworkingConfigValue, ESteamNetworkingConfigScope, nint, out ESteamNetworkingConfigDataType, nint, ref ulong)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L360)

<p>/ Set a configuration value, using a struct to pass the value.</p>
<p>/ (This is just a convenience shortcut; see below for the implementation and</p>
<p>/ a little insight into how SteamNetworkingConfigValue_t is used when</p>
<p>/ setting config options during listen socket and connection creation.)</p>
<p>/ Get a configuration value.</p>
<p>/ - eValue: which value to fetch</p>
<p>/ - eScopeType: query setting on what type of object</p>
<p>/ - eScopeArg: the object to query the setting for</p>
<p>/ - pOutDataType: If non-NULL, the data type of the value is returned.</p>
<p>/ - pResult: Where to put the result.  Pass NULL to query the required buffer size.  (k_ESteamNetworkingGetConfigValue_BufferTooSmall will be returned.)</p>
<p>/ - cbResult: IN: the size of your buffer.  OUT: the number of bytes filled in or required.</p>

```csharp
public static ESteamNetworkingGetConfigValueResult GetConfigValue(ESteamNetworkingConfigValue eValue, ESteamNetworkingConfigScope eScopeType, nint scopeObj, out ESteamNetworkingConfigDataType pOutDataType, nint pResult, ref ulong cbResult)
```

#### Parameters

- **eValue**: [ESteamNetworkingConfigValue](/docs/api/steamapi/esteamnetworkingconfigvalue)
- **eScopeType**: [ESteamNetworkingConfigScope](/docs/api/steamapi/esteamnetworkingconfigscope)
- **scopeObj**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **pOutDataType**: [ESteamNetworkingConfigDataType](/docs/api/steamapi/esteamnetworkingconfigdatatype)
- **pResult**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **cbResult**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [ESteamNetworkingGetConfigValueResult](/docs/api/steamapi/esteamnetworkinggetconfigvalueresult)

### GetConfigValueInfo(ESteamNetworkingConfigValue, out ESteamNetworkingConfigDataType, out ESteamNetworkingConfigScope)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L370)

<p>/ Get info about a configuration value.  Returns the name of the value,</p>
<p>/ or NULL if the value doesn't exist.  Other output parameters can be NULL</p>
<p>/ if you do not need them.</p>

```csharp
public static string GetConfigValueInfo(ESteamNetworkingConfigValue eValue, out ESteamNetworkingConfigDataType pOutDataType, out ESteamNetworkingConfigScope pOutScope)
```

#### Parameters

- **eValue**: [ESteamNetworkingConfigValue](/docs/api/steamapi/esteamnetworkingconfigvalue)
- **pOutDataType**: [ESteamNetworkingConfigDataType](/docs/api/steamapi/esteamnetworkingconfigdatatype)
- **pOutScope**: [ESteamNetworkingConfigScope](/docs/api/steamapi/esteamnetworkingconfigscope)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetDirectPingToPOP(SteamNetworkingPOPID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L211)

<p>/ Get *direct* ping time to the relays at the data center.</p>

```csharp
public static int GetDirectPingToPOP(SteamNetworkingPOPID popID)
```

#### Parameters

- **popID**: [SteamNetworkingPOPID](/docs/api/steamapi/steamnetworkingpopid)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetIPv4FakeIPType(uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L300)

```csharp
public static ESteamNetworkingFakeIPType GetIPv4FakeIPType(uint nIPv4)
```

#### Parameters

- **nIPv4**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [ESteamNetworkingFakeIPType](/docs/api/steamapi/esteamnetworkingfakeiptype)

### GetLocalPingLocation(out SteamNetworkPingLocation_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L97)

<p> "Ping location" functions</p>
<p> We use the ping times to the valve relays deployed worldwide to</p>
<p> generate a "marker" that describes the location of an Internet host.</p>
<p> Given two such markers, we can estimate the network latency between</p>
<p> two hosts, without sending any packets.  The estimate is based on the</p>
<p> optimal route that is found through the Valve network.  If you are</p>
<p> using the Valve network to carry the traffic, then this is precisely</p>
<p> the ping you want.  If you are not, then the ping time will probably</p>
<p> still be a reasonable estimate.</p>
<p> This is extremely useful to select peers for matchmaking!</p>
<p> The markers can also be converted to a string, so they can be transmitted.</p>
<p> We have a separate library you can use on your app's matchmaking/coordinating</p>
<p> server to manipulate these objects.  (See steamdatagram_gamecoordinator.h)</p>
<p>/ Return location info for the current host.  Returns the approximate</p>
<p>/ age of the data, in seconds, or -1 if no data is available.</p>
<p>/</p>
<p>/ It takes a few seconds to initialize access to the relay network.  If</p>
<p>/ you call this very soon after calling InitRelayNetworkAccess,</p>
<p>/ the data may not be available yet.</p>
<p>/</p>
<p>/ This always return the most up-to-date information we have available</p>
<p>/ right now, even if we are in the middle of re-calculating ping times.</p>

```csharp
public static float GetLocalPingLocation(out SteamNetworkPingLocation_t result)
```

#### Parameters

- **result**: [SteamNetworkPingLocation_t](/docs/api/steamapi/steamnetworkpinglocation_t)

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GetLocalTimestamp()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L253)

<p> Misc</p>
<p>/ Fetch current timestamp.  This timer has the following properties:</p>
<p>/</p>
<p>/ - Monotonicity is guaranteed.</p>
<p>/ - The initial value will be at least 24*3600*30*1e6, i.e. about</p>
<p>/   30 days worth of microseconds.  In this way, the timestamp value of</p>
<p>/   0 will always be at least "30 days ago".  Also, negative numbers</p>
<p>/   will never be returned.</p>
<p>/ - Wraparound / overflow is not a practical concern.</p>
<p>/</p>
<p>/ If you are running under the debugger and stop the process, the clock</p>
<p>/ might not advance the full wall clock time that has elapsed between</p>
<p>/ calls.  If the process is not blocked from normal operation, the</p>
<p>/ timestamp values will track wall clock time, even if you don't call</p>
<p>/ the function frequently.</p>
<p>/</p>
<p>/ The value is only meaningful for this run of the process.  Don't compare</p>
<p>/ it to values obtained on another computer, or other runs of the same process.</p>

```csharp
public static SteamNetworkingMicroseconds GetLocalTimestamp()
```

#### Returns

- [SteamNetworkingMicroseconds](/docs/api/steamapi/steamnetworkingmicroseconds)

### GetPOPCount()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L219)

<p>/ Get number of network points of presence in the config</p>

```csharp
public static int GetPOPCount()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetPOPList(out SteamNetworkingPOPID, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L228)

<p>/ Get list of all POP IDs.  Returns the number of entries that were filled into</p>
<p>/ your list.</p>

```csharp
public static int GetPOPList(out SteamNetworkingPOPID list, int nListSz)
```

#### Parameters

- **list**: [SteamNetworkingPOPID](/docs/api/steamapi/steamnetworkingpopid)
- **nListSz**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetPingToDataCenter(SteamNetworkingPOPID, out SteamNetworkingPOPID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L203)

<p> List of Valve data centers, and ping times to them.  This might</p>
<p> be useful to you if you are use our hosting, or just need to measure</p>
<p> latency to a cloud data center where we are running relays.</p>
<p>/ Fetch ping time of best available relayed route from this host to</p>
<p>/ the specified data center.</p>

```csharp
public static int GetPingToDataCenter(SteamNetworkingPOPID popID, out SteamNetworkingPOPID pViaRelayPoP)
```

#### Parameters

- **popID**: [SteamNetworkingPOPID](/docs/api/steamapi/steamnetworkingpopid)
- **pViaRelayPoP**: [SteamNetworkingPOPID](/docs/api/steamapi/steamnetworkingpopid)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetRealIdentityForFakeIP(ref SteamNetworkingIPAddr, out SteamNetworkingIdentity)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L319)

<p>/ Get the real identity associated with a given FakeIP.</p>
<p>/</p>
<p>/ On failure, returns:</p>
<p>/ - k_EResultInvalidParam: the IP is not a FakeIP.</p>
<p>/ - k_EResultNoMatch: we don't recognize that FakeIP and don't know the corresponding identity.</p>
<p>/</p>
<p>/ FakeIP's used by active connections, or the FakeIPs assigned to local identities,</p>
<p>/ will always work.  FakeIPs for recently destroyed connections will continue to</p>
<p>/ return results for a little while, but not forever.  At some point, we will forget</p>
<p>/ FakeIPs to save space.  It's reasonably safe to assume that you can read back the</p>
<p>/ real identity of a connection very soon after it is destroyed.  But do not wait</p>
<p>/ indefinitely.</p>

```csharp
public static EResult GetRealIdentityForFakeIP(ref SteamNetworkingIPAddr fakeIP, out SteamNetworkingIdentity pOutRealIdentity)
```

#### Parameters

- **fakeIP**: [SteamNetworkingIPAddr](/docs/api/steamapi/steamnetworkingipaddr)
- **pOutRealIdentity**: [SteamNetworkingIdentity](/docs/api/steamapi/steamnetworkingidentity)

#### Returns

- [EResult](/docs/api/steamapi/eresult)

### GetRelayNetworkStatus(out SteamRelayNetworkStatus_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L68)

<p>/ Fetch current status of the relay network.</p>
<p>/</p>
<p>/ SteamRelayNetworkStatus_t is also a callback.  It will be triggered on</p>
<p>/ both the user and gameserver interfaces any time the status changes, or</p>
<p>/ ping measurement starts or stops.</p>
<p>/</p>
<p>/ SteamRelayNetworkStatus_t::m_eAvail is returned.  If you want</p>
<p>/ more details, you can pass a non-NULL value.</p>

```csharp
public static ESteamNetworkingAvailability GetRelayNetworkStatus(out SteamRelayNetworkStatus_t pDetails)
```

#### Parameters

- **pDetails**: [SteamRelayNetworkStatus_t](/docs/api/steamapi/steamrelaynetworkstatus_t)

#### Returns

- [ESteamNetworkingAvailability](/docs/api/steamapi/esteamnetworkingavailability)

### InitRelayNetworkAccess()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L53)

<p> Access to Steam Datagram Relay (SDR) network</p>
<p> Initialization and status check</p>
<p>/ If you know that you are going to be using the relay network (for example,</p>
<p>/ because you anticipate making P2P connections), call this to initialize the</p>
<p>/ relay network.  If you do not call this, the initialization will</p>
<p>/ be delayed until the first time you use a feature that requires access</p>
<p>/ to the relay network, which will delay that first access.</p>
<p>/</p>
<p>/ You can also call this to force a retry if the previous attempt has failed.</p>
<p>/ Performing any action that requires access to the relay network will also</p>
<p>/ trigger a retry, and so calling this function is never strictly necessary,</p>
<p>/ but it can be useful to call it a program launch time, if access to the</p>
<p>/ relay network is anticipated.</p>
<p>/</p>
<p>/ Use GetRelayNetworkStatus or listen for SteamRelayNetworkStatus_t</p>
<p>/ callbacks to know when initialization has completed.</p>
<p>/ Typically initialization completes in a few seconds.</p>
<p>/</p>
<p>/ Note: dedicated servers hosted in known data centers do *not* need</p>
<p>/ to call this, since they do not make routing decisions.  However, if</p>
<p>/ the dedicated server will be using P2P functionality, it will act as</p>
<p>/ a "client" and this should be called.</p>

```csharp
public static void InitRelayNetworkAccess()
```

### IsFakeIPv4(uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L295)

<p> Fake IP</p>
<p> Useful for interfacing with code that assumes peers are identified using an IPv4 address</p>
<p>/ Return true if an IPv4 address is one that might be used as a "fake" one.</p>
<p>/ This function is fast; it just does some logical tests on the IP and does</p>
<p>/ not need to do any lookup operations.</p>

```csharp
public static bool IsFakeIPv4(uint nIPv4)
```

#### Parameters

- **nIPv4**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IterateGenericEditableConfigValues(ESteamNetworkingConfigValue, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L385)

<p>/ Iterate the list of all configuration values in the current environment that it might</p>
<p>/ be possible to display or edit using a generic UI.  To get the first iterable value,</p>
<p>/ pass k_ESteamNetworkingConfig_Invalid.  Returns k_ESteamNetworkingConfig_Invalid</p>
<p>/ to signal end of list.</p>
<p>/</p>
<p>/ The bEnumerateDevVars argument can be used to include "dev" vars.  These are vars that</p>
<p>/ are recommended to only be editable in "debug" or "dev" mode and typically should not be</p>
<p>/ shown in a retail environment where a malicious local user might use this to cheat.</p>

```csharp
public static ESteamNetworkingConfigValue IterateGenericEditableConfigValues(ESteamNetworkingConfigValue eCurrent, bool bEnumerateDevVars)
```

#### Parameters

- **eCurrent**: [ESteamNetworkingConfigValue](/docs/api/steamapi/esteamnetworkingconfigvalue)
- **bEnumerateDevVars**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [ESteamNetworkingConfigValue](/docs/api/steamapi/esteamnetworkingconfigvalue)

### ParsePingLocationString(string, out SteamNetworkPingLocation_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L164)

<p>/ Parse back SteamNetworkPingLocation_t string.  Returns false if we couldn't understand</p>
<p>/ the string.</p>

```csharp
public static bool ParsePingLocationString(string pszString, out SteamNetworkPingLocation_t result)
```

#### Parameters

- **pszString**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **result**: [SteamNetworkPingLocation_t](/docs/api/steamapi/steamnetworkpinglocation_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetConfigValue(ESteamNetworkingConfigValue, ESteamNetworkingConfigScope, nint, ESteamNetworkingConfigDataType, nint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L342)

<p> Set and get configuration values, see ESteamNetworkingConfigValue for individual descriptions.</p>
<p> Shortcuts for common cases.  (Implemented as inline functions below)</p>
<p> Set global callbacks.  If you do not want to use Steam's callback dispatch mechanism and you</p>
<p> want to use the same callback on all (or most) listen sockets and connections, then</p>
<p> simply install these callbacks first thing, and you are good to go.</p>
<p> See ISteamNetworkingSockets::RunCallbacks</p>
<p>/ Set a configuration value.</p>
<p>/ - eValue: which value is being set</p>
<p>/ - eScope: Onto what type of object are you applying the setting?</p>
<p>/ - scopeArg: Which object you want to change?  (Ignored for global scope).  E.g. connection handle, listen socket handle, interface pointer, etc.</p>
<p>/ - eDataType: What type of data is in the buffer at pValue?  This must match the type of the variable exactly!</p>
<p>/ - pArg: Value to set it to.  You can pass NULL to remove a non-global setting at this scope,</p>
<p>/   causing the value for that object to use global defaults.  Or at global scope, passing NULL</p>
<p>/   will reset any custom value and restore it to the system default.</p>
<p>/   NOTE: When setting pointers (e.g. callback functions), do not pass the function pointer directly.</p>
<p>/   Your argument should be a pointer to a function pointer.</p>

```csharp
public static bool SetConfigValue(ESteamNetworkingConfigValue eValue, ESteamNetworkingConfigScope eScopeType, nint scopeObj, ESteamNetworkingConfigDataType eDataType, nint pArg)
```

#### Parameters

- **eValue**: [ESteamNetworkingConfigValue](/docs/api/steamapi/esteamnetworkingconfigvalue)
- **eScopeType**: [ESteamNetworkingConfigScope](/docs/api/steamapi/esteamnetworkingconfigscope)
- **scopeObj**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **eDataType**: [ESteamNetworkingConfigDataType](/docs/api/steamapi/esteamnetworkingconfigdatatype)
- **pArg**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetDebugOutputFunction(ESteamNetworkingSocketsDebugOutputType, FSteamNetworkingSocketsDebugOutput)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L283)

<p>/ Set a function to receive network-related information that is useful for debugging.</p>
<p>/ This can be very useful during development, but it can also be useful for troubleshooting</p>
<p>/ problems with tech savvy end users.  If you have a console or other log that customers</p>
<p>/ can examine, these log messages can often be helpful to troubleshoot network issues.</p>
<p>/ (Especially any warning/error messages.)</p>
<p>/</p>
<p>/ The detail level indicates what message to invoke your callback on.  Lower numeric</p>
<p>/ value means more important, and the value you pass is the lowest priority (highest</p>
<p>/ numeric value) you wish to receive callbacks for.</p>
<p>/</p>
<p>/ The value here controls the detail level for most messages.  You can control the</p>
<p>/ detail level for various subsystems (perhaps only for certain connections) by</p>
<p>/ adjusting the configuration values k_ESteamNetworkingConfig_LogLevel_Xxxxx.</p>
<p>/</p>
<p>/ Except when debugging, you should only use k_ESteamNetworkingSocketsDebugOutputType_Msg</p>
<p>/ or k_ESteamNetworkingSocketsDebugOutputType_Warning.  For best performance, do NOT</p>
<p>/ request a high detail level and then filter out messages in your callback.  This incurs</p>
<p>/ all of the expense of formatting the messages, which are then discarded.  Setting a high</p>
<p>/ priority value (low numeric value) here allows the library to avoid doing this work.</p>
<p>/</p>
<p>/ IMPORTANT: This may be called from a service thread, while we own a mutex, etc.</p>
<p>/ Your output function must be threadsafe and fast!  Do not make any other</p>
<p>/ Steamworks calls from within the handler.</p>

```csharp
public static void SetDebugOutputFunction(ESteamNetworkingSocketsDebugOutputType eDetailLevel, FSteamNetworkingSocketsDebugOutput pfnFunc)
```

#### Parameters

- **eDetailLevel**: [ESteamNetworkingSocketsDebugOutputType](/docs/api/steamapi/esteamnetworkingsocketsdebugoutputtype)
- **pfnFunc**: [FSteamNetworkingSocketsDebugOutput](/docs/api/steamapi/fsteamnetworkingsocketsdebugoutput)

### SteamNetworkingIPAddr_GetFakeIPType(ref SteamNetworkingIPAddr)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L409)

```csharp
public static ESteamNetworkingFakeIPType SteamNetworkingIPAddr_GetFakeIPType(ref SteamNetworkingIPAddr addr)
```

#### Parameters

- **addr**: [SteamNetworkingIPAddr](/docs/api/steamapi/steamnetworkingipaddr)

#### Returns

- [ESteamNetworkingFakeIPType](/docs/api/steamapi/esteamnetworkingfakeiptype)

### SteamNetworkingIPAddr_ParseString(out SteamNetworkingIPAddr, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L402)

```csharp
public static bool SteamNetworkingIPAddr_ParseString(out SteamNetworkingIPAddr pAddr, string pszStr)
```

#### Parameters

- **pAddr**: [SteamNetworkingIPAddr](/docs/api/steamapi/steamnetworkingipaddr)
- **pszStr**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SteamNetworkingIPAddr_ToString(ref SteamNetworkingIPAddr, out string, uint, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L394)

<p> String conversions.  You'll usually access these using the respective</p>
<p> inline methods.</p>

```csharp
public static void SteamNetworkingIPAddr_ToString(ref SteamNetworkingIPAddr addr, out string buf, uint cbBuf, bool bWithPort)
```

#### Parameters

- **addr**: [SteamNetworkingIPAddr](/docs/api/steamapi/steamnetworkingipaddr)
- **buf**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cbBuf**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **bWithPort**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SteamNetworkingIdentity_ParseString(out SteamNetworkingIdentity, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L422)

```csharp
public static bool SteamNetworkingIdentity_ParseString(out SteamNetworkingIdentity pIdentity, string pszStr)
```

#### Parameters

- **pIdentity**: [SteamNetworkingIdentity](/docs/api/steamapi/steamnetworkingidentity)
- **pszStr**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SteamNetworkingIdentity_ToString(ref SteamNetworkingIdentity, out string, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingutils.cs#L414)

```csharp
public static void SteamNetworkingIdentity_ToString(ref SteamNetworkingIdentity identity, out string buf, uint cbBuf)
```

#### Parameters

- **identity**: [SteamNetworkingIdentity](/docs/api/steamapi/steamnetworkingidentity)
- **buf**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cbBuf**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

