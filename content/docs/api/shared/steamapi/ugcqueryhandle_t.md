---
title: UGCQueryHandle_t
---

```csharp
[Serializable]
public struct UGCQueryHandle_t : IEquatable<UGCQueryHandle_t>, IComparable<UGCQueryHandle_t>
```

#### Implements

#### Inherited Members

## Constructors

### UGCQueryHandle_t(ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamUGC/UGCQueryHandle_t.cs#L10)

```csharp
public UGCQueryHandle_t(ulong value)
```

#### Parameters

- **value**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

## Fields

### Invalid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamUGC/UGCQueryHandle_t.cs#L7)

```csharp
public static readonly UGCQueryHandle_t Invalid
```

#### Field Value

- [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)

### m_UGCQueryHandle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamUGC/UGCQueryHandle_t.cs#L8)

```csharp
public ulong m_UGCQueryHandle
```

#### Field Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

## Methods

### CompareTo(UGCQueryHandle_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamUGC/UGCQueryHandle_t.cs#L46)

```csharp
public int CompareTo(UGCQueryHandle_t other)
```

#### Parameters

- **other**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t) - An object to compare with this instance.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A value that indicates the relative order of the objects being compared. The return value has these meanings:

 <table><thead><tr><th class="term"> Value</th><th class="description"> Meaning</th></tr></thead><tbody><tr><td class="term"> Less than zero</td><td class="description"> This instance precedes <code class="paramref">other</code> in the sort order.</td></tr><tr><td class="term"> Zero</td><td class="description"> This instance occurs in the same position in the sort order as <code class="paramref">other</code>.</td></tr><tr><td class="term"> Greater than zero</td><td class="description"> This instance follows <code class="paramref">other</code> in the sort order.</td></tr></tbody></table>

### Equals(object)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamUGC/UGCQueryHandle_t.cs#L18)

```csharp
public override bool Equals(object other)
```

#### Parameters

- **other**: [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(UGCQueryHandle_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamUGC/UGCQueryHandle_t.cs#L42)

```csharp
public bool Equals(UGCQueryHandle_t other)
```

#### Parameters

- **other**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetHashCode()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamUGC/UGCQueryHandle_t.cs#L22)

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### ToString()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamUGC/UGCQueryHandle_t.cs#L14)

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator ==(UGCQueryHandle_t, UGCQueryHandle_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamUGC/UGCQueryHandle_t.cs#L26)

```csharp
public static bool operator ==(UGCQueryHandle_t x, UGCQueryHandle_t y)
```

#### Parameters

- **x**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **y**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### explicit operator UGCQueryHandle_t(ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamUGC/UGCQueryHandle_t.cs#L34)

```csharp
public static explicit operator UGCQueryHandle_t(ulong value)
```

#### Parameters

- **value**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)

### explicit operator ulong(UGCQueryHandle_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamUGC/UGCQueryHandle_t.cs#L38)

```csharp
public static explicit operator ulong(UGCQueryHandle_t that)
```

#### Parameters

- **that**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)

#### Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### operator !=(UGCQueryHandle_t, UGCQueryHandle_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamUGC/UGCQueryHandle_t.cs#L30)

```csharp
public static bool operator !=(UGCQueryHandle_t x, UGCQueryHandle_t y)
```

#### Parameters

- **x**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)
- **y**: [UGCQueryHandle_t](/docs/api/shared/steamapi/ugcqueryhandle_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

