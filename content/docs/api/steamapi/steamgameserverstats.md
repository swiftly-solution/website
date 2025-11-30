---
title: SteamGameServerStats
---

# Class SteamGameServerStats

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverstats.cs#L5)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public static class SteamGameServerStats
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [SteamGameServerStats](/docs/api/steamapi/steamgameserverstats)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### ClearUserAchievement(CSteamID, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverstats.cs#L76)

```csharp
public static bool ClearUserAchievement(CSteamID steamIDUser, string pchName)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/steamapi/csteamid)
- **pchName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetUserAchievement(CSteamID, string, out bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverstats.cs#L35)

```csharp
public static bool GetUserAchievement(CSteamID steamIDUser, string pchName, out bool pbAchieved)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/steamapi/csteamid)
- **pchName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pbAchieved**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetUserStat(CSteamID, string, out int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverstats.cs#L21)

<p> requests stat information for a user, usable after a successful call to RequestUserStats()</p>

```csharp
public static bool GetUserStat(CSteamID steamIDUser, string pchName, out int pData)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/steamapi/csteamid)
- **pchName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pData**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetUserStat(CSteamID, string, out float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverstats.cs#L28)

```csharp
public static bool GetUserStat(CSteamID steamIDUser, string pchName, out float pData)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/steamapi/csteamid)
- **pchName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pData**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RequestUserStats(CSteamID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverstats.cs#L13)

<p> downloads stats for the user</p>
<p> returns a GSStatsReceived_t callback when completed</p>
<p> if the user has no stats, GSStatsReceived_t.m_eResult will be set to k_EResultFail</p>
<p> these stats will only be auto-updated for clients playing on the server. For other</p>
<p> users you'll need to call RequestUserStats() again to refresh any data</p>

```csharp
public static SteamAPICall_t RequestUserStats(CSteamID steamIDUser)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/steamapi/csteamid)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### SetUserAchievement(CSteamID, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverstats.cs#L69)

```csharp
public static bool SetUserAchievement(CSteamID steamIDUser, string pchName)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/steamapi/csteamid)
- **pchName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetUserStat(CSteamID, string, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverstats.cs#L48)

<p> Set / update stats and achievements.</p>
<p> Note: These updates will work only on stats game servers are allowed to edit and only for</p>
<p> game servers that have been declared as officially controlled by the game creators.</p>
<p> Set the IP range of your official servers on the Steamworks page</p>

```csharp
public static bool SetUserStat(CSteamID steamIDUser, string pchName, int nData)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/steamapi/csteamid)
- **pchName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **nData**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetUserStat(CSteamID, string, float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverstats.cs#L55)

```csharp
public static bool SetUserStat(CSteamID steamIDUser, string pchName, float fData)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/steamapi/csteamid)
- **pchName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **fData**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StoreUserStats(CSteamID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverstats.cs#L90)

<p> Store the current data on the server, will get a GSStatsStored_t callback when set.</p>
<p> If the callback has a result of k_EResultInvalidParam, one or more stats</p>
<p> uploaded has been rejected, either because they broke constraints</p>
<p> or were out of date. In this case the server sends back updated values.</p>
<p> The stats should be re-iterated to keep in sync.</p>

```csharp
public static SteamAPICall_t StoreUserStats(CSteamID steamIDUser)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/steamapi/csteamid)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### UpdateUserAvgRateStat(CSteamID, string, float, double)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverstats.cs#L62)

```csharp
public static bool UpdateUserAvgRateStat(CSteamID steamIDUser, string pchName, float flCountThisSession, double dSessionLength)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/steamapi/csteamid)
- **pchName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **flCountThisSession**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **dSessionLength**: [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

