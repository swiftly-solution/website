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

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L79)

```csharp
public static bool IsValidSteamId64(ulong steamId64)
```

#### Parameters

- **steamId64**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ParseToSteamId64(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L14)

```csharp
public static ulong? ParseToSteamId64(string input)
```

#### Parameters

- **input**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)?

### ToSteamId(ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L84)

```csharp
public static string ToSteamId(ulong steamId64)
```

#### Parameters

- **steamId64**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ToSteamId3(ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L96)

```csharp
public static string ToSteamId3(ulong steamId64)
```

#### Parameters

- **steamId64**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

