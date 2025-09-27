---
title: IntervalTimer
---

```csharp
public interface IntervalTimer : ISchemaClass<IntervalTimer>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Timestamp** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IntervalTimer.cs#L16)

```csharp
GameTime_t Timestamp { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**WorldGroupId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IntervalTimer.cs#L18)

```csharp
ref uint WorldGroupId { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

**TimestampUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IntervalTimer.cs#L20)

```csharp
void TimestampUpdated()
```

**WorldGroupIdUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IntervalTimer.cs#L21)

```csharp
void WorldGroupIdUpdated()
```

