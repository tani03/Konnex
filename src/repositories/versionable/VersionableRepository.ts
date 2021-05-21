import * as mongoose from 'mongoose';

export default class VersionableRepository<
	D extends mongoose.Document,
	M extends mongoose.Model<D>
> {
	create(data: any) {
		throw undefined;
	}
	private model: M;

	constructor(model) {
		this.model = model;
	}

	public static generateObjectId(): string {
		return String(mongoose.Types.ObjectId());
	}

	public async createUser(data: any, creator): Promise<D> {
		const id = VersionableRepository.generateObjectId();

		const modelData = {
			...data,
			originalId: id,
			createdBy: creator,
			_id: id,
		};

		return await this.model.create(modelData);
	}

	public async getUser(data: any) {
		return await this.model.findOne(data);
	}

	public async getAll() {
		return await this.model.find({});
	}

	public async findOne(query: object) {
		return await this.model.findOne(query).lean();
	}
}