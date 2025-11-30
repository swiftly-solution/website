---
title: SteamIPAddress_t
---

# Struct SteamIPAddress_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/SteamIPAddress_t.cs#L6)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
[Serializable]
public struct SteamIPAddress_t
```

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### SteamIPAddress_t(IPAddress)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/SteamIPAddress_t.cs#L15)

```csharp
public SteamIPAddress_t(IPAddress iPAddress)
```

#### Parameters

- **iPAddress**: [IPAddress](https://learn.microsoft.com/dotnet/api/system.net.ipaddress)

## Methods

### GetIPType()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/SteamIPAddress_t.cs#L72)

```csharp
public ESteamIPType GetIPType()
```

#### Returns

- [ESteamIPType](/docs/api/steamapi/esteamiptype)

### IsSet()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/SteamIPAddress_t.cs#L77)

```csharp
public bool IsSet()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ToIPAddress()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/SteamIPAddress_t.cs#L51)

```csharp
public IPAddress ToIPAddress()
```

#### Returns

- [IPAddress](https://learn.microsoft.com/dotnet/api/system.net.ipaddress)

### ToString()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/SteamIPAddress_t.cs#L67)

Returns the fully qualified type name of this instance.

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

