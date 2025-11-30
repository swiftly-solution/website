---
title: ISchemaClass
---

# Interface ISchemaClass

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Schemas/ISchemaClass.cs#L5)

**Namespace**: [SwiftlyS2.Shared.Schemas](/docs/api/schemas)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ISchemaClass : INativeHandle
```

#### Implements

- [INativeHandle](/docs/api/natives/inativehandle)

## Methods

### As()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Schemas/ISchemaClass.cs#L12)

Convert this handle to another type.

```csharp
K As<K>() where K : ISchemaClass<K>
```

#### Returns

- K - The converted handle.

#### Type Parameters

- **K**:  - The type to convert to.

