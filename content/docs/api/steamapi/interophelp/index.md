---
title: Class InteropHelp
---

# Class InteropHelp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/InteropHelp.cs#L8)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public class InteropHelp
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [InteropHelp](/docs/api/steamapi/interophelp)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### ByteArrayToStringUTF8(byte[])

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/InteropHelp.cs#L87)

```csharp
public static string ByteArrayToStringUTF8(byte[] buffer)
```

#### Parameters

- **buffer**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### PtrToStringUTF8(nint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/InteropHelp.cs#L63)

```csharp
public static string PtrToStringUTF8(nint nativeUtf8)
```

#### Parameters

- **nativeUtf8**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### StringToByteArrayUTF8(string, byte[], int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/InteropHelp.cs#L98)

```csharp
public static void StringToByteArrayUTF8(string str, byte[] outArrayBuffer, int outArrayBufferSize)
```

#### Parameters

- **str**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **outArrayBuffer**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **outArrayBufferSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TestIfAvailableClient()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/InteropHelp.cs#L44)

```csharp
public static void TestIfAvailableClient()
```

### TestIfAvailableGameServer()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/InteropHelp.cs#L50)

```csharp
public static void TestIfAvailableGameServer()
```

### TestIfPlatformSupported()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/InteropHelp.cs#L40)

```csharp
public static void TestIfPlatformSupported()
```

