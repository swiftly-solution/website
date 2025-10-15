---
title: IntervalTimer
---

```csharp
public interface IntervalTimer : ISchemaClass<IntervalTimer>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Timestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IntervalTimer.cs#L17)

```csharp
GameTime_t Timestamp { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### WorldGroupId

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IntervalTimer.cs#L19)

```csharp
ref uint WorldGroupId { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### TimestampUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IntervalTimer.cs#L21)

```csharp
void TimestampUpdated()
```

### WorldGroupIdUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IntervalTimer.cs#L22)

```csharp
void WorldGroupIdUpdated()
```

