---
title: EventPostAdvanceTick_t
---

```csharp
public interface EventPostAdvanceTick_t : EventSimulate_t, ISchemaClass<EventSimulate_t>, ISchemaClass<EventPostAdvanceTick_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CurrentTick

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventPostAdvanceTick_t.cs#L17)

```csharp
ref int CurrentTick { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CurrentTickThisFrame

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventPostAdvanceTick_t.cs#L19)

```csharp
ref int CurrentTickThisFrame { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TotalTicks

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventPostAdvanceTick_t.cs#L23)

```csharp
ref int TotalTicks { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TotalTicksThisFrame

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EventPostAdvanceTick_t.cs#L21)

```csharp
ref int TotalTicksThisFrame { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

