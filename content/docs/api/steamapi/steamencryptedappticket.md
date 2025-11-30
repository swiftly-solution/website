---
title: SteamEncryptedAppTicket
---

# Class SteamEncryptedAppTicket

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L207)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public static class SteamEncryptedAppTicket
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [SteamEncryptedAppTicket](/docs/api/steamapi/steamencryptedappticket)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### BDecryptTicket(byte[], uint, byte[], ref uint, byte[], int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L209)

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

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L215)

```csharp
public static bool BIsTicketForApp(byte[] rgubTicketDecrypted, uint cubTicketDecrypted, AppId_t nAppID)
```

#### Parameters

- **rgubTicketDecrypted**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubTicketDecrypted**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **nAppID**: [AppId_t](/docs/api/steamapi/appid_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BIsTicketSigned(byte[], uint, byte[], uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L260)

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

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L245)

```csharp
public static bool BUserIsVacBanned(byte[] rgubTicketDecrypted, uint cubTicketDecrypted)
```

#### Parameters

- **rgubTicketDecrypted**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubTicketDecrypted**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BUserOwnsAppInTicket(byte[], uint, AppId_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L239)

```csharp
public static bool BUserOwnsAppInTicket(byte[] rgubTicketDecrypted, uint cubTicketDecrypted, AppId_t nAppID)
```

#### Parameters

- **rgubTicketDecrypted**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubTicketDecrypted**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **nAppID**: [AppId_t](/docs/api/steamapi/appid_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetTicketAppID(byte[], uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L233)

```csharp
public static uint GetTicketAppID(byte[] rgubTicketDecrypted, uint cubTicketDecrypted)
```

#### Parameters

- **rgubTicketDecrypted**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubTicketDecrypted**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetTicketIssueTime(byte[], uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L221)

```csharp
public static uint GetTicketIssueTime(byte[] rgubTicketDecrypted, uint cubTicketDecrypted)
```

#### Parameters

- **rgubTicketDecrypted**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubTicketDecrypted**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetTicketSteamID(byte[], uint, out CSteamID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L227)

```csharp
public static void GetTicketSteamID(byte[] rgubTicketDecrypted, uint cubTicketDecrypted, out CSteamID psteamID)
```

#### Parameters

- **rgubTicketDecrypted**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubTicketDecrypted**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **psteamID**: [CSteamID](/docs/api/steamapi/csteamid)

### GetUserVariableData(byte[], uint, out uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/Steam.cs#L251)

```csharp
public static byte[] GetUserVariableData(byte[] rgubTicketDecrypted, uint cubTicketDecrypted, out uint pcubUserData)
```

#### Parameters

- **rgubTicketDecrypted**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubTicketDecrypted**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pcubUserData**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

