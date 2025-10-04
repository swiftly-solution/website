---
title: PermissionCacheKey
---

```csharp
public readonly struct PermissionCacheKey : IEquatable<PermissionCacheKey>
```

#### Implements

#### Inherited Members

## Properties

**Permission** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Permissions/PermissionCacheKey.cs#L5)

```csharp
public required string Permission { get; init; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**PlayerId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Permissions/PermissionCacheKey.cs#L4)

```csharp
public required ulong PlayerId { get; init; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

## Methods

**Equals(PermissionCacheKey)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Permissions/PermissionCacheKey.cs#L8)

```csharp
public bool Equals(PermissionCacheKey other)
```

#### Parameters

- **other**: [PermissionCacheKey](/docs/api/core/permissions/permissioncachekey) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

**GetHashCode()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Permissions/PermissionCacheKey.cs#L12)

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

