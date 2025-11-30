---
title: MurmurHash2
---

# Class MurmurHash2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Misc/MurmurHash2.cs#L5)

**Namespace**: [SwiftlyS2.Shared.Misc](/docs/api/misc)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public static class MurmurHash2
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [MurmurHash2](/docs/api/misc/murmurhash2)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### Hash(byte[], uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Misc/MurmurHash2.cs#L10)

Compute MurmurHash2 (32-bit) of a byte array with an optional seed.

```csharp
public static uint Hash(byte[] data, uint seed = 826366246)
```

#### Parameters

- **data**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **seed**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### HashString(string, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Misc/MurmurHash2.cs#L58)

Convenience method for strings (UTF8).

```csharp
public static uint HashString(string text, uint seed = 826366246)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **seed**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### HashStringLowercase(string, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Misc/MurmurHash2.cs#L66)

Convert a string to lowercase and then hash it.

```csharp
public static uint HashStringLowercase(string text, uint seed = 826366246)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **seed**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

