---
title: EventClientFrameSimulate_t
---

# Interface EventClientFrameSimulate_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventClientFrameSimulate_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface EventClientFrameSimulate_t : ISchemaClass<EventClientFrameSimulate_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<EventClientFrameSimulate_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### FrameTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventClientFrameSimulate_t.cs#L22)

```csharp
ref float FrameTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LoopState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventClientFrameSimulate_t.cs#L18)

```csharp
EngineLoopState_t LoopState { get; }
```

#### Property Value

- [EngineLoopState_t](/docs/api/schemadefinitions/engineloopstate_t)

### RealTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventClientFrameSimulate_t.cs#L20)

```csharp
ref float RealTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ScheduleSendTickPacket

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventClientFrameSimulate_t.cs#L24)

```csharp
ref bool ScheduleSendTickPacket { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

