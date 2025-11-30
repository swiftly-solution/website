---
title: CNmTransitionEvent
---

# Interface CNmTransitionEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionEvent.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNmTransitionEvent : CNmEvent, ISchemaClass<CNmEvent>, ISchemaClass<CNmTransitionEvent>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CNmEvent](/docs/api/schemadefinitions/cnmevent)
- [ISchemaClass<CNmEvent>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmTransitionEvent>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionEvent.cs#L20)

```csharp
ref CGlobalSymbol ID { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/natives/cglobalsymbol)

### Rule

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionEvent.cs#L18)

```csharp
ref NmTransitionRule_t Rule { get; }
```

#### Property Value

- [NmTransitionRule_t](/docs/api/schemadefinitions/nmtransitionrule_t)

