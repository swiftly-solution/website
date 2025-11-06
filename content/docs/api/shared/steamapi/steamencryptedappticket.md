---
title: SteamEncryptedAppTicket
---

```csharp
public static class SteamEncryptedAppTicket
```

#### Inheritance

#### Inherited Members

## Methods

### BDecryptTicket(byte[], uint, byte[], ref uint, byte[], int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L209)

```csharp
public static bool BDecryptTicket(byte[] rgubTicketEncrypted, uint cubTicketEncrypted, byte[] rgubTicketDecrypted, ref uint pcubTicketDecrypted, byte[] rgubKey, int cubKey)
```

#### Parameters

- **rgubTicketEncrypted**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubTicketEncrypted**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **rgubTicketDecrypted**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **pcubTicketDecrypted**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **rgubKey**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubKey**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BIsTicketForApp(byte[], uint, AppId_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L215)

```csharp
public static bool BIsTicketForApp(byte[] rgubTicketDecrypted, uint cubTicketDecrypted, AppId_t nAppID)
```

#### Parameters

- **rgubTicketDecrypted**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubTicketDecrypted**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **nAppID**: [AppId_t](/docs/api/shared/steamapi/appid_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BIsTicketSigned(byte[], uint, byte[], uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L260)

```csharp
public static bool BIsTicketSigned(byte[] rgubTicketDecrypted, uint cubTicketDecrypted, byte[] pubRSAKey, uint cubRSAKey)
```

#### Parameters

- **rgubTicketDecrypted**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubTicketDecrypted**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pubRSAKey**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubRSAKey**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BUserIsVacBanned(byte[], uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L245)

```csharp
public static bool BUserIsVacBanned(byte[] rgubTicketDecrypted, uint cubTicketDecrypted)
```

#### Parameters

- **rgubTicketDecrypted**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubTicketDecrypted**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BUserOwnsAppInTicket(byte[], uint, AppId_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L239)

```csharp
public static bool BUserOwnsAppInTicket(byte[] rgubTicketDecrypted, uint cubTicketDecrypted, AppId_t nAppID)
```

#### Parameters

- **rgubTicketDecrypted**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubTicketDecrypted**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **nAppID**: [AppId_t](/docs/api/shared/steamapi/appid_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetTicketAppID(byte[], uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L233)

```csharp
public static uint GetTicketAppID(byte[] rgubTicketDecrypted, uint cubTicketDecrypted)
```

#### Parameters

- **rgubTicketDecrypted**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubTicketDecrypted**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetTicketIssueTime(byte[], uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L221)

```csharp
public static uint GetTicketIssueTime(byte[] rgubTicketDecrypted, uint cubTicketDecrypted)
```

#### Parameters

- **rgubTicketDecrypted**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubTicketDecrypted**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetTicketSteamID(byte[], uint, out CSteamID)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L227)

```csharp
public static void GetTicketSteamID(byte[] rgubTicketDecrypted, uint cubTicketDecrypted, out CSteamID psteamID)
```

#### Parameters

- **rgubTicketDecrypted**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubTicketDecrypted**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **psteamID**: [CSteamID](/docs/api/shared/steamapi/csteamid)

### GetUserVariableData(byte[], uint, out uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L251)

```csharp
public static byte[] GetUserVariableData(byte[] rgubTicketDecrypted, uint cubTicketDecrypted, out uint pcubUserData)
```

#### Parameters

- **rgubTicketDecrypted**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubTicketDecrypted**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pcubUserData**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

