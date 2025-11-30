---
title: EventPostAdvanceTick_t
---

# Interface EventPostAdvanceTick_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventPostAdvanceTick_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface EventPostAdvanceTick_t : EventSimulate_t, ISchemaClass<EventSimulate_t>, ISchemaClass<EventPostAdvanceTick_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [EventSimulate_t](/docs/api/schemadefinitions/eventsimulate_t)
- [ISchemaClass<EventSimulate_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<EventPostAdvanceTick_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CurrentTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventPostAdvanceTick_t.cs#L18)

```csharp
ref int CurrentTick { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CurrentTickThisFrame

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventPostAdvanceTick_t.cs#L20)

```csharp
ref int CurrentTickThisFrame { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TotalTicks

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventPostAdvanceTick_t.cs#L24)

```csharp
ref int TotalTicks { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TotalTicksThisFrame

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventPostAdvanceTick_t.cs#L22)

```csharp
ref int TotalTicksThisFrame { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

