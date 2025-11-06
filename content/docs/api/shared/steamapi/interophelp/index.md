---
title: Class InteropHelp
---

```csharp
public class InteropHelp
```

#### Inheritance

#### Inherited Members

## Methods

### ByteArrayToStringUTF8(byte[])

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/InteropHelp.cs#L87)

```csharp
public static string ByteArrayToStringUTF8(byte[] buffer)
```

#### Parameters

- **buffer**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### PtrToStringUTF8(nint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/InteropHelp.cs#L63)

```csharp
public static string PtrToStringUTF8(nint nativeUtf8)
```

#### Parameters

- **nativeUtf8**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### StringToByteArrayUTF8(string, byte[], int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/InteropHelp.cs#L98)

```csharp
public static void StringToByteArrayUTF8(string str, byte[] outArrayBuffer, int outArrayBufferSize)
```

#### Parameters

- **str**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **outArrayBuffer**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **outArrayBufferSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TestIfAvailableClient()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/InteropHelp.cs#L44)

```csharp
public static void TestIfAvailableClient()
```

### TestIfAvailableGameServer()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/InteropHelp.cs#L50)

```csharp
public static void TestIfAvailableGameServer()
```

### TestIfPlatformSupported()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/InteropHelp.cs#L40)

```csharp
public static void TestIfPlatformSupported()
```

