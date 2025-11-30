---
title: CNmSoundEvent
---

# Interface CNmSoundEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSoundEvent.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNmSoundEvent : CNmEvent, ISchemaClass<CNmEvent>, ISchemaClass<CNmSoundEvent>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CNmEvent](/docs/api/schemadefinitions/cnmevent)
- [ISchemaClass<CNmEvent>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmSoundEvent>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AttachmentName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSoundEvent.cs#L24)

```csharp
string AttachmentName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ContinuePlayingSoundAtDurationEnd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSoundEvent.cs#L28)

```csharp
ref bool ContinuePlayingSoundAtDurationEnd { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DurationInterruptionThreshold

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSoundEvent.cs#L30)

```csharp
ref float DurationInterruptionThreshold { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSoundEvent.cs#L20)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Position

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSoundEvent.cs#L22)

```csharp
ref CNmSoundEvent__Position_t Position { get; }
```

#### Property Value

- [CNmSoundEvent__Position_t](/docs/api/schemadefinitions/cnmsoundevent__position_t)

### Relevance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSoundEvent.cs#L18)

```csharp
ref CNmEventRelevance_t Relevance { get; }
```

#### Property Value

- [CNmEventRelevance_t](/docs/api/schemadefinitions/cnmeventrelevance_t)

### Tags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSoundEvent.cs#L26)

```csharp
string Tags { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

