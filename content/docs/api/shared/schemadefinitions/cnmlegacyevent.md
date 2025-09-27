---
title: CNmLegacyEvent
---

```csharp
public interface CNmLegacyEvent : CNmEvent, ISchemaClass<CNmEvent>, ISchemaClass<CNmLegacyEvent>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AnimEventClassName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmLegacyEvent.cs#L16)

```csharp
ref CUtlString AnimEventClassName { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

**KV** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmLegacyEvent.cs#L19)

```csharp
SchemaUntypedField KV { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

