---
title: HSteamListenSocket
---

```csharp
[Serializable]
public struct HSteamListenSocket : IEquatable<HSteamListenSocket>, IComparable<HSteamListenSocket>
```

#### Implements

#### Inherited Members

## Constructors

### HSteamListenSocket(uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L10)

```csharp
public HSteamListenSocket(uint value)
```

#### Parameters

- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Fields

### Invalid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L7)

```csharp
public static readonly HSteamListenSocket Invalid
```

#### Field Value

- [HSteamListenSocket](/docs/api/shared/steamapi/hsteamlistensocket)

### m_HSteamListenSocket

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L8)

```csharp
public uint m_HSteamListenSocket
```

#### Field Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### CompareTo(HSteamListenSocket)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L46)

```csharp
public int CompareTo(HSteamListenSocket other)
```

#### Parameters

- **other**: [HSteamListenSocket](/docs/api/shared/steamapi/hsteamlistensocket) - An object to compare with this instance.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A value that indicates the relative order of the objects being compared. The return value has these meanings:

 <table><thead><tr><th class="term"> Value</th><th class="description"> Meaning</th></tr></thead><tbody><tr><td class="term"> Less than zero</td><td class="description"> This instance precedes <code class="paramref">other</code> in the sort order.</td></tr><tr><td class="term"> Zero</td><td class="description"> This instance occurs in the same position in the sort order as <code class="paramref">other</code>.</td></tr><tr><td class="term"> Greater than zero</td><td class="description"> This instance follows <code class="paramref">other</code> in the sort order.</td></tr></tbody></table>

### Equals(object)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L18)

```csharp
public override bool Equals(object other)
```

#### Parameters

- **other**: [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(HSteamListenSocket)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L42)

```csharp
public bool Equals(HSteamListenSocket other)
```

#### Parameters

- **other**: [HSteamListenSocket](/docs/api/shared/steamapi/hsteamlistensocket) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetHashCode()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L22)

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### ToString()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L14)

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator ==(HSteamListenSocket, HSteamListenSocket)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L26)

```csharp
public static bool operator ==(HSteamListenSocket x, HSteamListenSocket y)
```

#### Parameters

- **x**: [HSteamListenSocket](/docs/api/shared/steamapi/hsteamlistensocket)
- **y**: [HSteamListenSocket](/docs/api/shared/steamapi/hsteamlistensocket)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### explicit operator HSteamListenSocket(uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L34)

```csharp
public static explicit operator HSteamListenSocket(uint value)
```

#### Parameters

- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [HSteamListenSocket](/docs/api/shared/steamapi/hsteamlistensocket)

### explicit operator uint(HSteamListenSocket)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L38)

```csharp
public static explicit operator uint(HSteamListenSocket that)
```

#### Parameters

- **that**: [HSteamListenSocket](/docs/api/shared/steamapi/hsteamlistensocket)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### operator !=(HSteamListenSocket, HSteamListenSocket)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L30)

```csharp
public static bool operator !=(HSteamListenSocket x, HSteamListenSocket y)
```

#### Parameters

- **x**: [HSteamListenSocket](/docs/api/shared/steamapi/hsteamlistensocket)
- **y**: [HSteamListenSocket](/docs/api/shared/steamapi/hsteamlistensocket)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

