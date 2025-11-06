---
title: HServerListRequest
---

```csharp
[Serializable]
public struct HServerListRequest : IEquatable<HServerListRequest>
```

#### Implements

#### Inherited Members

## Constructors

### HServerListRequest(nint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerListRequest.cs#L10)

```csharp
public HServerListRequest(nint value)
```

#### Parameters

- **value**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

## Fields

### Invalid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerListRequest.cs#L7)

```csharp
public static readonly HServerListRequest Invalid
```

#### Field Value

- [HServerListRequest](/docs/api/shared/steamapi/hserverlistrequest)

### m_HServerListRequest

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerListRequest.cs#L8)

```csharp
public nint m_HServerListRequest
```

#### Field Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

## Methods

### Equals(object)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerListRequest.cs#L18)

```csharp
public override bool Equals(object other)
```

#### Parameters

- **other**: [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(HServerListRequest)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerListRequest.cs#L42)

```csharp
public bool Equals(HServerListRequest other)
```

#### Parameters

- **other**: [HServerListRequest](/docs/api/shared/steamapi/hserverlistrequest) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetHashCode()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerListRequest.cs#L22)

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### ToString()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerListRequest.cs#L14)

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator ==(HServerListRequest, HServerListRequest)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerListRequest.cs#L26)

```csharp
public static bool operator ==(HServerListRequest x, HServerListRequest y)
```

#### Parameters

- **x**: [HServerListRequest](/docs/api/shared/steamapi/hserverlistrequest)
- **y**: [HServerListRequest](/docs/api/shared/steamapi/hserverlistrequest)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### explicit operator HServerListRequest(nint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerListRequest.cs#L34)

```csharp
public static explicit operator HServerListRequest(nint value)
```

#### Parameters

- **value**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

#### Returns

- [HServerListRequest](/docs/api/shared/steamapi/hserverlistrequest)

### explicit operator nint(HServerListRequest)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerListRequest.cs#L38)

```csharp
public static explicit operator nint(HServerListRequest that)
```

#### Parameters

- **that**: [HServerListRequest](/docs/api/shared/steamapi/hserverlistrequest)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### operator !=(HServerListRequest, HServerListRequest)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerListRequest.cs#L30)

```csharp
public static bool operator !=(HServerListRequest x, HServerListRequest y)
```

#### Parameters

- **x**: [HServerListRequest](/docs/api/shared/steamapi/hserverlistrequest)
- **y**: [HServerListRequest](/docs/api/shared/steamapi/hserverlistrequest)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

