---
title: thinkfunc_t
---

# Interface thinkfunc_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/thinkfunc_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface thinkfunc_t : ISchemaClass<thinkfunc_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<thinkfunc_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Context

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/thinkfunc_t.cs#L21)

```csharp
ref CUtlStringToken Context { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/natives/cutlstringtoken)

### Fn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/thinkfunc_t.cs#L19)

```csharp
SchemaUntypedField Fn { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### LastThinkTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/thinkfunc_t.cs#L25)

```csharp
GameTick_t LastThinkTick { get; }
```

#### Property Value

- [GameTick_t](/docs/api/schemadefinitions/gametick_t)

### NextThinkTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/thinkfunc_t.cs#L23)

```csharp
GameTick_t NextThinkTick { get; }
```

#### Property Value

- [GameTick_t](/docs/api/schemadefinitions/gametick_t)

