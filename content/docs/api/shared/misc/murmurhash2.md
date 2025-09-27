---
title: MurmurHash2
---

```csharp
public static class MurmurHash2
```

#### Inheritance

#### Inherited Members

## Methods

**Hash(byte[], uint)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Misc/MurmurHash2.cs#L10)

```csharp
public static uint Hash(byte[] data, uint seed = 826366246)
```

#### Parameters

- **data**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **seed**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**HashString(string, uint)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Misc/MurmurHash2.cs#L58)

```csharp
public static uint HashString(string text, uint seed = 826366246)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **seed**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**HashStringLowercase(string, uint)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Misc/MurmurHash2.cs#L66)

```csharp
public static uint HashStringLowercase(string text, uint seed = 826366246)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **seed**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

