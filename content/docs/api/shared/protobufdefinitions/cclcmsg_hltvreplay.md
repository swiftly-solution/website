---
title: CCLCMsg_HltvReplay
---

```csharp
public interface CCLCMsg_HltvReplay : ITypedProtobuf<CCLCMsg_HltvReplay>, INativeHandle, INetMessage<CCLCMsg_HltvReplay>, IDisposable
```

#### Implements

## Properties

**EventTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_HltvReplay.cs#L30)

```csharp
float EventTime { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**PrimaryTarget** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_HltvReplay.cs#L27)

```csharp
int PrimaryTarget { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Request** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_HltvReplay.cs#L18)

```csharp
int Request { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**SlowdownLength** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_HltvReplay.cs#L21)

```csharp
float SlowdownLength { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**SlowdownRate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_HltvReplay.cs#L24)

```csharp
float SlowdownRate { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

