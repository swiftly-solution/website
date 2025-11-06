---
title: SteamGameServerStats
---

```csharp
public static class SteamGameServerStats
```

#### Inheritance

#### Inherited Members

## Methods

### ClearUserAchievement(CSteamID, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverstats.cs#L76)

```csharp
public static bool ClearUserAchievement(CSteamID steamIDUser, string pchName)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/shared/steamapi/csteamid)
- **pchName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetUserAchievement(CSteamID, string, out bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverstats.cs#L35)

```csharp
public static bool GetUserAchievement(CSteamID steamIDUser, string pchName, out bool pbAchieved)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/shared/steamapi/csteamid)
- **pchName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pbAchieved**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetUserStat(CSteamID, string, out int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverstats.cs#L21)

```csharp
public static bool GetUserStat(CSteamID steamIDUser, string pchName, out int pData)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/shared/steamapi/csteamid)
- **pchName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pData**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetUserStat(CSteamID, string, out float)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverstats.cs#L28)

```csharp
public static bool GetUserStat(CSteamID steamIDUser, string pchName, out float pData)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/shared/steamapi/csteamid)
- **pchName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pData**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RequestUserStats(CSteamID)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverstats.cs#L13)

```csharp
public static SteamAPICall_t RequestUserStats(CSteamID steamIDUser)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/shared/steamapi/csteamid)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### SetUserAchievement(CSteamID, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverstats.cs#L69)

```csharp
public static bool SetUserAchievement(CSteamID steamIDUser, string pchName)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/shared/steamapi/csteamid)
- **pchName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetUserStat(CSteamID, string, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverstats.cs#L48)

```csharp
public static bool SetUserStat(CSteamID steamIDUser, string pchName, int nData)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/shared/steamapi/csteamid)
- **pchName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **nData**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetUserStat(CSteamID, string, float)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverstats.cs#L55)

```csharp
public static bool SetUserStat(CSteamID steamIDUser, string pchName, float fData)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/shared/steamapi/csteamid)
- **pchName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **fData**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StoreUserStats(CSteamID)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverstats.cs#L90)

```csharp
public static SteamAPICall_t StoreUserStats(CSteamID steamIDUser)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/shared/steamapi/csteamid)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### UpdateUserAvgRateStat(CSteamID, string, float, double)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverstats.cs#L62)

```csharp
public static bool UpdateUserAvgRateStat(CSteamID steamIDUser, string pchName, float flCountThisSession, double dSessionLength)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/shared/steamapi/csteamid)
- **pchName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **flCountThisSession**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **dSessionLength**: [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

