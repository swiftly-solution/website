---
title: CNmSoundEvent
---

```csharp
public interface CNmSoundEvent : CNmEvent, ISchemaClass<CNmEvent>, ISchemaClass<CNmSoundEvent>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AttachmentName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSoundEvent.cs#L22)

```csharp
ref CUtlString AttachmentName { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

**ContinuePlayingSoundAtDurationEnd** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSoundEvent.cs#L26)

```csharp
ref bool ContinuePlayingSoundAtDurationEnd { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**DurationInterruptionThreshold** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSoundEvent.cs#L28)

```csharp
ref float DurationInterruptionThreshold { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSoundEvent.cs#L18)

```csharp
ref CUtlString Name { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

**Position** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSoundEvent.cs#L20)

```csharp
ref CNmSoundEvent__Position_t Position { get; }
```

#### Property Value

- [CNmSoundEvent__Position_t](/docs/api/shared/schemadefinitions/cnmsoundevent__position_t)

**Relevance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSoundEvent.cs#L16)

```csharp
ref CNmEventRelevance_t Relevance { get; }
```

#### Property Value

- [CNmEventRelevance_t](/docs/api/shared/schemadefinitions/cnmeventrelevance_t)

**Tags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSoundEvent.cs#L24)

```csharp
ref CUtlString Tags { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

