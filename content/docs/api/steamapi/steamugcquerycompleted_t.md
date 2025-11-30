---
title: SteamUGCQueryCompleted_t
---

# Struct SteamUGCQueryCompleted_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L2140)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public struct SteamUGCQueryCompleted_t
```

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### k_iCallback

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L2143)

```csharp
public const int k_iCallback = 3401
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m_bCachedData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L2149)

```csharp
public bool m_bCachedData
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### m_eResult

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L2145)

```csharp
public EResult m_eResult
```

#### Field Value

- [EResult](/docs/api/steamapi/eresult)

### m_handle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L2144)

```csharp
public UGCQueryHandle_t m_handle
```

#### Field Value

- [UGCQueryHandle_t](/docs/api/steamapi/ugcqueryhandle_t)

### m_unNumResultsReturned

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L2146)

```csharp
public uint m_unNumResultsReturned
```

#### Field Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### m_unTotalMatchingResults

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L2147)

```csharp
public uint m_unTotalMatchingResults
```

#### Field Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Properties

### m_rgchNextCursor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/SteamCallbacks.cs#L2152)

```csharp
public string m_rgchNextCursor { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

