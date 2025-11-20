---
title: SteamIdParser
---

```csharp
public class SteamIdParser
```

#### Inheritance

#### Inherited Members

## Methods

### IsValidSteamId64(ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L104)

```csharp
public static bool IsValidSteamId64(ulong steamId64)
```

#### Parameters

- **steamId64**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ParseToSteamId64(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L15)

```csharp
public static ulong? ParseToSteamId64(string input)
```

#### Parameters

- **input**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)?

### ToSteamId(ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L109)

```csharp
public static string ToSteamId(ulong steamId64)
```

#### Parameters

- **steamId64**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ToSteamId3(ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L121)

```csharp
public static string ToSteamId3(ulong steamId64)
```

#### Parameters

- **steamId64**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ToSteamIdOnline(ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L130)

```csharp
public static string ToSteamIdOnline(ulong steamId64)
```

#### Parameters

- **steamId64**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TryParseSteamIdOnline(string, out ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L68)

```csharp
public static bool TryParseSteamIdOnline(string input, out ulong steamId64)
```

#### Parameters

- **input**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **steamId64**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

