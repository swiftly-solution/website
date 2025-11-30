---
title: CNmLegacyEvent
---

# Interface CNmLegacyEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmLegacyEvent.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNmLegacyEvent : CNmEvent, ISchemaClass<CNmEvent>, ISchemaClass<CNmLegacyEvent>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CNmEvent](/docs/api/schemadefinitions/cnmevent)
- [ISchemaClass<CNmEvent>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmLegacyEvent>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AnimEventClassName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmLegacyEvent.cs#L18)

```csharp
string AnimEventClassName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### KV

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmLegacyEvent.cs#L21)

```csharp
SchemaUntypedField KV { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

