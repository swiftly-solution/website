---
title: thinkfunc_t
---

```csharp
public interface thinkfunc_t : ISchemaClass<thinkfunc_t>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **Context** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/thinkfunc_t.cs#L19)

```csharp
ref CUtlStringToken Context { get; }
```

- Property Value

- [CUtlStringToken](/docs/api/shared/natives/cutlstringtoken)

### **Fn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/thinkfunc_t.cs#L17)

```csharp
SchemaUntypedField Fn { get; }
```

- Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **LastThinkTick** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/thinkfunc_t.cs#L23)

```csharp
GameTick_t LastThinkTick { get; }
```

- Property Value

- [GameTick_t](/docs/api/shared/schemadefinitions/gametick_t)

### **NextThinkTick** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/thinkfunc_t.cs#L21)

```csharp
GameTick_t NextThinkTick { get; }
```

- Property Value

- [GameTick_t](/docs/api/shared/schemadefinitions/gametick_t)

