---
title: EventClientProcessInput_t
---

```csharp
public interface EventClientProcessInput_t : ISchemaClass<EventClientProcessInput_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### LoopState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventClientProcessInput_t.cs#L17)

```csharp
EngineLoopState_t LoopState { get; }
```

#### Property Value

- [EngineLoopState_t](/docs/api/shared/schemadefinitions/engineloopstate_t)

### RealTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventClientProcessInput_t.cs#L19)

```csharp
ref float RealTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TickInterval

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventClientProcessInput_t.cs#L21)

```csharp
ref float TickInterval { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TickStartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventClientProcessInput_t.cs#L23)

```csharp
ref double TickStartTime { get; }
```

#### Property Value

- [double](https://learn.microsoft.com/dotnet/api/system.double)

