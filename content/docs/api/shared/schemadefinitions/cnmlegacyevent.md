---
title: CNmLegacyEvent
---

```csharp
public interface CNmLegacyEvent : CNmEvent, ISchemaClass<CNmEvent>, ISchemaClass<CNmLegacyEvent>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **AnimEventClassName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmLegacyEvent.cs#L16)

```csharp
string AnimEventClassName { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **KV** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmLegacyEvent.cs#L19)

```csharp
SchemaUntypedField KV { get; }
```

- Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

