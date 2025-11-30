---
title: EventClientPreOutput_t
---

# Interface EventClientPreOutput_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventClientPreOutput_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface EventClientPreOutput_t : ISchemaClass<EventClientPreOutput_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<EventClientPreOutput_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### LoopState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventClientPreOutput_t.cs#L18)

```csharp
EngineLoopState_t LoopState { get; }
```

#### Property Value

- [EngineLoopState_t](/docs/api/schemadefinitions/engineloopstate_t)

### RealTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventClientPreOutput_t.cs#L26)

```csharp
ref float RealTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RenderFrameTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventClientPreOutput_t.cs#L22)

```csharp
ref double RenderFrameTime { get; }
```

#### Property Value

- [double](https://learn.microsoft.com/dotnet/api/system.double)

### RenderFrameTimeUnbounded

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventClientPreOutput_t.cs#L24)

```csharp
ref double RenderFrameTimeUnbounded { get; }
```

#### Property Value

- [double](https://learn.microsoft.com/dotnet/api/system.double)

### RenderOnly

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventClientPreOutput_t.cs#L28)

```csharp
ref bool RenderOnly { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RenderTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventClientPreOutput_t.cs#L20)

```csharp
ref double RenderTime { get; }
```

#### Property Value

- [double](https://learn.microsoft.com/dotnet/api/system.double)

