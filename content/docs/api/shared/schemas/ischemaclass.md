---
title: ISchemaClass
---

```csharp
public interface ISchemaClass : INativeHandle
```

#### Implements

## Methods

### As()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Schemas/ISchemaClass.cs#L12)

```csharp
K As<K>() where K : ISchemaClass<K>
```

#### Returns

- K - The converted handle.

#### Type Parameters

- **K**:  - The type to convert to.

