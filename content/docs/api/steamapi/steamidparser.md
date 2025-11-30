---
title: SteamIdParser
---

# Class SteamIdParser

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/obj/Release/System.Text.RegularExpressions.Generator/System.Text.RegularExpressions.Generator.RegexGenerator/RegexGenerator.g.cs#L149)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public class SteamIdParser
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [SteamIdParser](/docs/api/steamapi/steamidparser)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### IsValidSteamId64(ulong)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L104)

```csharp
public static bool IsValidSteamId64(ulong steamId64)
```

#### Parameters

- **steamId64**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ParseToSteamId64(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L15)

```csharp
public static ulong? ParseToSteamId64(string input)
```

#### Parameters

- **input**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)?

### ToSteamId(ulong)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L109)

```csharp
public static string ToSteamId(ulong steamId64)
```

#### Parameters

- **steamId64**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ToSteamId3(ulong)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L121)

```csharp
public static string ToSteamId3(ulong steamId64)
```

#### Parameters

- **steamId64**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ToSteamIdOnline(ulong)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L130)

```csharp
public static string ToSteamIdOnline(ulong steamId64)
```

#### Parameters

- **steamId64**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TryParseSteamIdOnline(string, out ulong)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L68)

```csharp
public static bool TryParseSteamIdOnline(string input, out ulong steamId64)
```

#### Parameters

- **input**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **steamId64**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

