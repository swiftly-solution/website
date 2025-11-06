---
title: HServerQuery
---

```csharp
[Serializable]
public struct HServerQuery : IEquatable<HServerQuery>, IComparable<HServerQuery>
```

#### Implements

#### Inherited Members

## Constructors

### HServerQuery(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerQuery.cs#L10)

```csharp
public HServerQuery(int value)
```

#### Parameters

- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Fields

### Invalid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerQuery.cs#L7)

```csharp
public static readonly HServerQuery Invalid
```

#### Field Value

- [HServerQuery](/docs/api/shared/steamapi/hserverquery)

### m_HServerQuery

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerQuery.cs#L8)

```csharp
public int m_HServerQuery
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### CompareTo(HServerQuery)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerQuery.cs#L46)

```csharp
public int CompareTo(HServerQuery other)
```

#### Parameters

- **other**: [HServerQuery](/docs/api/shared/steamapi/hserverquery) - An object to compare with this instance.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A value that indicates the relative order of the objects being compared. The return value has these meanings:  

 <table><thead><tr><th class="term"> Value</th><th class="description"> Meaning</th></tr></thead><tbody><tr><td class="term"> Less than zero</td><td class="description"> This instance precedes <code class="paramref">other</code> in the sort order.</td></tr><tr><td class="term"> Zero</td><td class="description"> This instance occurs in the same position in the sort order as <code class="paramref">other</code>.</td></tr><tr><td class="term"> Greater than zero</td><td class="description"> This instance follows <code class="paramref">other</code> in the sort order.</td></tr></tbody></table>

### Equals(object)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerQuery.cs#L18)

```csharp
public override bool Equals(object other)
```

#### Parameters

- **other**: [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(HServerQuery)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerQuery.cs#L42)

```csharp
public bool Equals(HServerQuery other)
```

#### Parameters

- **other**: [HServerQuery](/docs/api/shared/steamapi/hserverquery) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetHashCode()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerQuery.cs#L22)

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### ToString()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerQuery.cs#L14)

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator ==(HServerQuery, HServerQuery)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerQuery.cs#L26)

```csharp
public static bool operator ==(HServerQuery x, HServerQuery y)
```

#### Parameters

- **x**: [HServerQuery](/docs/api/shared/steamapi/hserverquery)
- **y**: [HServerQuery](/docs/api/shared/steamapi/hserverquery)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### explicit operator HServerQuery(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerQuery.cs#L34)

```csharp
public static explicit operator HServerQuery(int value)
```

#### Parameters

- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [HServerQuery](/docs/api/shared/steamapi/hserverquery)

### explicit operator int(HServerQuery)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerQuery.cs#L38)

```csharp
public static explicit operator int(HServerQuery that)
```

#### Parameters

- **that**: [HServerQuery](/docs/api/shared/steamapi/hserverquery)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### operator !=(HServerQuery, HServerQuery)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerQuery.cs#L30)

```csharp
public static bool operator !=(HServerQuery x, HServerQuery y)
```

#### Parameters

- **x**: [HServerQuery](/docs/api/shared/steamapi/hserverquery)
- **y**: [HServerQuery](/docs/api/shared/steamapi/hserverquery)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

