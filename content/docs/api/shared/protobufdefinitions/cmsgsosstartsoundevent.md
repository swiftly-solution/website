---
title: CMsgSosStartSoundEvent
---

```csharp
public interface CMsgSosStartSoundEvent : ITypedProtobuf<CMsgSosStartSoundEvent>, INativeHandle, INetMessage<CMsgSosStartSoundEvent>, IDisposable
```

#### Implements

## Properties

**PackedParams** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSosStartSoundEvent.cs#L30)

```csharp
byte[] PackedParams { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

**Seed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSosStartSoundEvent.cs#L27)

```csharp
int Seed { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**SoundeventGuid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSosStartSoundEvent.cs#L18)

```csharp
int SoundeventGuid { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**SoundeventHash** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSosStartSoundEvent.cs#L21)

```csharp
uint SoundeventHash { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**SourceEntityIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSosStartSoundEvent.cs#L24)

```csharp
int SourceEntityIndex { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**StartTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSosStartSoundEvent.cs#L33)

```csharp
float StartTime { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

